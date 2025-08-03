import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav>
        <div className="left">
             <Link to="/admin"><h2 id="main-title">e-commerce.in</h2></Link>
        </div>
        <div className='search'>
            <input type="text" placeholder='search'/>
            <p id="search-icon"><i class="ri-search-line"></i></p>
        </div>
        <div className="right">
          <Link to="/admin/products/add"><button id="add-product">Add New Product</button></Link>
        </div>
    </nav>
  )
}

export default Navbar
