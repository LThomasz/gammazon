import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { editItemThunk, loadOneItemThunk } from "../../redux/item"
import { useLocation, useParams } from "react-router-dom";
import './EditItem.css'

export default function EditItem() {
  const dispatch = useDispatch();
  const {state} = useLocation()
  const categories = ['Electronics', 'Books', 'Musical Instruments']
  const {productId} = useParams();
  const user = useSelector(state => state.session.user)
  const [category, setCategory] = useState(`${state.fromUI.item.category}`)
  const [name, setName] = useState(`${state.fromUI.item.name}`)
  const [image, setImage] = useState(`${state.fromUI.item.image}`)
  const [description, setDescription] = useState(`${state.fromUI.item.description}`)
  const [price, setPrice] = useState(parseInt(`${state.fromUI.item.price}`))
  const [imageLoading, setImageLoading] = useState(false);
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  console.log(state)

  useEffect(() => {
    const errors = {};

    if (!name.length) {
      errors.name = "Name is required"
    }
    if (name.length < 4 ) {
      errors.name = "Name must be at least 4 characters"
    }
    if (name.length > 255) {
      errors.name = "Name is too long"
    }

    if (image === null) {
      errors.image = "Image is required"
    }

    if (!description.length) {
      errors.description = "Description is required"
    }
    if (description.length > 255) {
      errors.description = "Description is too long"
    }

    if (!price) {
      errors.price = "Price is required"
    }
    if (price < 0) {
      errors.price = "Price cannot be negative"
    }

  })
  useEffect(() => {
    dispatch(loadOneItemThunk(productId))
  }, [dispatch])

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitted(true)

    const formData = new FormData();
    formData.append("user_id", user.id);
    formData.append("category_id", parseInt(category));
    formData.append("name", name);
    formData.append("image", image);
    formData.append("description", description);
    formData.append("price", price);

    setImageLoading(true);

    for (let i of formData.entries()) {
      console.log(i[0]+ ', ' + i[1])
    }

    await dispatch(editItemThunk(formData, productId))
  }

  return (
    <div className="edit-product-container">
      <div className="edit-product-form-container">
        <h1 className="edit-header">Edit product listing</h1>
        <form
          action={`/api/items/${productId}/edit`}
          onSubmit={handleSubmit}
          className="edit-product-form"
          encType="multipart/form-data"
        >
          <div className="edit-form-el">
            <p>Product Category</p>
            {submitted && errors.category && <p style={{color: 'red'}}>{errors.category}</p>}
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="" disabled >Choose here</option>
              <option value='1'>Electronics</option>
              <option value='2'>Books</option>
              <option value='3'>Musical Instruments</option>
              <option value='4'>Automotive</option>
              <option value='5'>Jewelry & Watches</option>
              <option value='6'>Pet Supplies</option>
            </select>
          </div>
          <div className="edit-form-el">
            <p>Product Name</p>
            {submitted && errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
            <input
              type="text"
              value={name}
              className="product-name product-input"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="edit-form-el">
            <p>Product Image</p>
            {submitted && errors.image && <p style={{color: 'red'}}>{errors.image}</p>}
            <input
              type="file"

              accept="image/*"
              className="product-image product-input"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="edit-form-el">
            <p>Product Description</p>
            {submitted && errors.description && <p style={{color: 'red'}}>{errors.description}</p>}
            <input
              type="text-area"
              value={description}
              className="product-description product-input"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="edit-form-el">
            <p>Product Price</p>
            {submitted && errors.price && <p style={{color: 'red'}}>{errors.price}</p>}
            <input
              type="number"
              value={price}
              className="product-price product-input"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="edit-product-button">
            <button
              className="edit-product-butt"
              type="submit"
            > Update Product Listing</button>
          </div>
          {(imageLoading) && <p className="loading-text">Loading...</p>}
        </form>
      </div>
    </div>
  )
}
