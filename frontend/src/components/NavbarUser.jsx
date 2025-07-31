import React from 'react'
import "./NavbarUser.css"
import { Link } from 'react-router-dom'

const NavbarUser = ({ cartCount, onCartClick }) => {
  return (
    <nav>
      <div className="left">
        <Link to="/"><h1>e-commerce.in</h1></Link>
      </div>
      <div className="right" style={{ position: "relative" }}>
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
      </div>
    </nav>
  )
}

export default NavbarUser