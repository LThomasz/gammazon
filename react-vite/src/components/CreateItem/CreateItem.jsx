import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addItemThunk } from "../../redux/item"
import { useNavigate } from "react-router-dom"
import "./CreateItem.css"

export default function CreateItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const categories = ['Electronics', 'Books', 'Musical Instruments', 'Automotive', 'Jewelry & Watches', 'Pet Supplies']
  const [category, setCategory] = useState("")
  const [name, setName] = useState("")
  const [image, setImage] = useState(null)
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState(null)
  const [imageLoading, setImageLoading] = useState(false);
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const user = useSelector(state => state.session.user)
  useEffect(() => {
    const newErrors = {};

    if (!name.length) {
      newErrors.name = "Name is required"
    }
    if (name.length < 4 ) {
      newErrors.name = "Name must be at least 4 characters"
    }
    if (name.length > 255) {
      newErrors.name = "Name is too long"
    }

    if (image === null) {
      newErrors.image = "Image is required"
    }

    if (!description.length) {
      newErrors.description = "Description is required"
    }
    if (description.length > 255) {
      newErrors.description = "Description is too long"
    }

    if (!price) {
      newErrors.price = "Price is required"
    }
    if (Number(price) < 0) {
      newErrors.price = "Price cannot be negative"
    }

    if (!category) {
      newErrors.category = "Category is required"
    }
    setErrors(newErrors)
  }, [name, image, description, price])

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitted(true)

    if (!Object.values(errors).length) {
      const formData = new FormData();
      formData.append("user_id", user.id);
      formData.append("category_id", parseInt(category));
      formData.append("name", name);
      formData.append("image", image);
      formData.append("description", description);
      formData.append("price", price);

      setImageLoading(true);

      // for (let i of formData.entries()) {
      //   console.log(i[0]+ ', ' + i[1])
      // }

      const item = await dispatch(addItemThunk(formData))
      navigate(`/products/${item.id}`)
    }
  }

  return (
    <div className="create-product-container">
      <div className="product-form-container">
        <h1>Create a product listing</h1>
        <form
          action="/api/items"
          onSubmit={handleSubmit}
          className="product-form"
          encType="multipart/form-data"
        >
          <div className="form-el">
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
          <div className="form-el">
            <p>Product Name</p>
            {submitted && errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
            <input
              type="text"
              className="product-name product-input"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-el">
            <p>Product Image</p>
            {submitted && errors.image && <p style={{color: 'red'}}>{errors.image}</p>}
            <input
              type="file"
              accept="image/*"
              className="product-image product-input"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="form-el">
            <p>Product Description</p>
            {submitted && errors.description && <p style={{color: 'red'}}>{errors.description}</p>}
            <input
              type="text-area"
              className="product-description product-input"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-el">
            <p>Product Price</p>
            {submitted && errors.price && <p style={{color: 'red'}}>{errors.price}</p>}
            <input
              type="string"
              pattern="^[0-9]\d{0,9}(\.\d{1,3})?%?$"
              className="product-price product-input"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="create-product-button">
            <button
              className="product-butt"
              type="submit"
            > Create Product Listing</button>
          </div>
          {(imageLoading) && <p className="loading-text">Loading...</p>}
        </form>
      </div>
    </div>
  )
}
