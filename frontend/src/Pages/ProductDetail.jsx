import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import "./productDetail.css"
import axios from 'axios'

const ProductDetail = () => {
  const { productId } = useParams()
  const navigate = useNavigate()
  const [productData, setProductData] = useState({})
  const [showUpdateForm, setShowUpdateForm] = useState(false)
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    image: null
  })

  useEffect(() => {
    getProductDetail()
    // eslint-disable-next-line
  }, [])

  const getProductDetail = async () => {
    try {
      const res = await axios.get("https://e-commerce-react-backend-z8tt.onrender.com/products/" + productId)
      setProductData(res.data.product)
      setForm({
        title: res.data.product.title || "",
        description: res.data.product.description || "",
        category: res.data.product.category || "",
        price: res.data.product.price || "",
        image: null
      })
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === "image") {
      setForm({ ...form, image: files[0] })
    } else {
      setForm({ ...form, [name]: value })
    }
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("title", form.title)
    formData.append("description", form.description)
    formData.append("category", form.category)
    formData.append("price", form.price)
    if (form.image) formData.append("image", form.image)

    try {
      await axios.post(`https://e-commerce-react-backend-z8tt.onrender.com/products/update/${productId}`, formData)
      setShowUpdateForm(false)
      navigate("/admin") // Redirect to home page
    } catch (err) {
      console.log(err)
    }
  }

  const handleDelete = async () => {
    try {
      await axios.get(`https://e-commerce-react-backend-z8tt.onrender.com/products/delete/${productId}`)
      navigate("/admin")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='product-container'>
      <div className="main">
        <div className="p-left">
          <img src={productData.image} alt={productData.title} />
        </div>
        <div className="p-right">
          <h1 id="p-title">{productData.title}</h1>
          <p id="p-description">{productData.description}</p>
          <p id="p-category">{productData.category}</p>
          <h2 id="p-price">Price: {productData.price}</h2>
          <div className="edit-buttons">
            <button id="update-button" onClick={() => setShowUpdateForm(true)}>Update Item</button>
            <button id="delete-button" onClick={handleDelete}>Delete Item</button>
          </div>
        </div>
      </div>
      {showUpdateForm && (
        <div className="update-form-popup">
          <form onSubmit={handleUpdate} className="update-form">
            <h3>Update Product</h3>
            <label>Title</label>
            <input type="text" name="title" value={form.title} onChange={handleChange} />
            <label>Description</label>
            <input type="text" name="description" value={form.description} onChange={handleChange} />
            <label>Category</label>
            <input type="text" name="category" value={form.category} onChange={handleChange} />
            <label>Price</label>
            <input type="number" name="price" value={form.price} onChange={handleChange} />
            <label>Image</label>
            <input type="file" name="image" accept="image/*" onChange={handleChange} />
            <button type="submit">Save Changes</button>
            <button type="button" onClick={() => setShowUpdateForm(false)} style={{marginLeft: "10px"}}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default ProductDetail