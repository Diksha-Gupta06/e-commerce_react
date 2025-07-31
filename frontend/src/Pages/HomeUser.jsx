import axios from "axios";
import React, { useEffect, useState } from "react";
import "./HomeUser.css";
import { Link } from "react-router-dom";
import NavbarUser from "../components/NavbarUser";

const HomeUser = () => {
  const [productData, setProductData] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [showCartPopup, setShowCartPopup] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get("https://e-commerce-react-backend-z8tt.onrender.com/")
      .then((res) => {
        setProductData(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addToCart = (product) => {
    setCartCount(cartCount + 1);
    setCartProducts([...cartProducts, product]);
  };

  const handleCartClick = () => {
    setShowCartPopup(!showCartPopup);
  };

  return (
    <div>
      <NavbarUser cartCount={cartCount} onCartClick={handleCartClick} />
      {/* Cart Popup */}
      {showCartPopup && (
        <div className="cart-popup">
          <h3>Cart</h3>
          {cartProducts.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartProducts.map((prod, idx) => (
              <div className="cart-item" key={idx}>
                <img src={prod.image} alt={prod.title} />
                <div>
                  <div className="cart-title">{prod.title}</div>
                  <div className="cart-price">Price: ₹{prod.price}</div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
      <div className="container">
        {productData.map((elem, index) => (
          <div className="card" key={index}>
            <div className="top">
              <img src={elem.image} alt="" />
            </div>
            <div className="bottom">
              <Link to={`/products/detail/${elem._id}`}><h2>{elem.title}</h2></Link>
              <p>{elem.description}</p>
              <h3>Price : {elem.price}</h3>
              <div className="button">
                <button id="add-button" onClick={() => addToCart(elem)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeUser;