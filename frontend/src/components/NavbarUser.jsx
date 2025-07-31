import React from 'react'
import "./NavbarUser.css"
import { Link } from 'react-router-dom'


const NavbarUser = ({ cartCount, onCartClick }) => {
  return (
    <nav>
      <div className="left">
        <Link to="/"><h1>e-commerce.in</h1></Link>
      </div>
      <div className="right">
        
        <button
          className="cart-btn"
          onClick={onCartClick}
        >
          {cartCount > 0 && (
            <span
              className="cart-count-badge"
            >
              {cartCount}
            </span>
          )}
          <i className="ri-shopping-cart-line"></i>
        </button>
        
        <Link to="/admin">
          <button className="admin-btn">Admin</button>
        </Link>
      </div>
    </nav>
  )
}


export default NavbarUser