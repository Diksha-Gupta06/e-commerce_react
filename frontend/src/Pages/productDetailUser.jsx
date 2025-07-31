import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./productDetailUser.css"
import axios from 'axios'
const ProductDetailUser = () => {

   const {productId} = useParams()
    const [productData, setproductData] = useState({})
    useEffect(() => {
        getProductDetail()

    }, [])
    

    const getProductDetail = async()=>{

       await axios.get("http://localhost:3000/products/"+productId)
        .then((res)=>{
            console.log(res);
            setproductData(res.data.product)
            
        }) 
        .catch((err)=>{
            console.log(err);
        })

    }

  return (
    <div className='product-container'>
     
      <div className="main">
        <div className="left">
            <img src={productData.image} alt="" />
        </div>
        <div className="right">
            <h1 id="p-title">{productData.title}</h1>
            <p id="p-description">{productData.description}</p>
            <div className="button">
                <button id="add">Add to Cart</button>
                <button id="buy">Buy Now</button>
            </div>
        </div>
        
        
      </div>

      
    </div>
  )
}

export default ProductDetailUser
