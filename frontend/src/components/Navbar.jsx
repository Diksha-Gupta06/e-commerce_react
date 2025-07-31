import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav>
        <div className="left">
             <Link to="/admin"><h2>e-commerce.in</h2></Link>
        </div>
        <div className='search'>
            <input type="text" placeholder='search'/><i class="ri-search-line"></i>
        </div>
        <div className="right">
          <Link to="/admin/products/add"><h3 id="add-product">Add new Product</h3></Link>
        </div>
    </nav>
  )
}

export default Navbar
