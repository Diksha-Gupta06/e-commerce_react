import React from 'react'
import "./NavbarUser.css"
import { Link } from 'react-router-dom'


const NavbarUser = ({ cartCount, onCartClick }) => {
  return (
    <nav>
      <div className="left">
        <Link to="/"><h1 id="main-title">e-commerce.in</h1></Link>
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
          <p id="cart-icon"><i class="ri-shopping-cart-line"></i></p>
        </button>
        
        <Link to="/admin">
          <button className="admin-btn">Admin</button>
        </Link>
      </div>
    </nav>
  )
}


export default NavbarUser