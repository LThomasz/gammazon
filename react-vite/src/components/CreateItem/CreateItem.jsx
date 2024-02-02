import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addItemThunk } from "../../redux/item"
import { useNavigate } from "react-router-dom"
import "./CreateItem.css"

export default function CreateItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [category, setCategory] = useState(0)
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState(null)
  const [imageLoading, setImageLoading] = useState(false);
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitted(true)

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
            <input
              type="number"
              className="product-category product-input"
              onChange={(e) => setCategory(e.target.value)}
            />
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
              onChange={(e) => setImage(e.target.value)}
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
              type="number"
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
