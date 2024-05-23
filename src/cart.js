import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Time from "./assets/IMG-20240416-WA0004.jpg";
import Android from "./assets/IMG-20240428-WA0008.jpg";
import CompNetwork from "./assets/IMG-20240428-WA0007.jpg";
import Stock from "./assets/IMG-20240428-WA0009.jpg";
import WebDev from "./assets/IMG-20240428-WA0010.jpg";
import Graphic from "./assets/IMG-20240428-WA0011.jpg";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartActive, setCartActive] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setCartActive(!cartActive);
  };

  const addToCart = (product) => {
    const existingProduct = cartItems.find(
      (item) => item.title === product.title
    );
    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeItem = (title) => {
    setCartItems(cartItems.filter((item) => item.title !== title));
  };

  const updateQuantity = (title, quantity) => {
    if (quantity < 1) quantity = 1;
    setCartItems(
      cartItems.map((item) =>
        item.title === title ? { ...item, quantity } : item
      )
    );
  };

  const getTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div class="cart">
      <header>
        <div className="logo">
          <span id="logo-title" title="Shopping Cart">
            Courses
          </span>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/login">Log Out</Link>
        </div>
        <div className="carts" title="Cart" onClick={toggleCart}>
          <p id="cart-count">{cartItems.length}</p>
          <i className="bx bx-cart cart" id="icart"></i>
        </div>
        <div className={`cart-container ${cartActive ? "cart-active" : ""}`}>
          <div className="cart-title">Cart Items</div>
          <div className="cart-content">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-box">
                <img src={item.img} className="cart-img" alt={item.title} />
                <div className="detail-box">
                  <div className="cart-food-title">{item.title}</div>
                  <div className="price-box">
                    <div className="cart-price">Rs.{item.price}</div>
                    <div className="cart-amt">
                      Rs.{item.price * item.quantity}
                    </div>
                  </div>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    className="cart-quantity"
                    onChange={(e) =>
                      updateQuantity(item.title, parseInt(e.target.value))
                    }
                  />
                </div>
                <i
                  name="trash"
                  className="bi bi-trash cart-remove"
                  onClick={() => removeItem(item.title)}
                ></i>
              </div>
            ))}
            <i
              name="close"
              id="cart-close"
              className="bi bi-x"
              onClick={toggleCart}
            ></i>
          </div>
          <div className="total">
            <div className="total-title">Total</div>
            <div className="total-price">Rs.{getTotal()}</div>
          </div>
        </div>
      </header>
      <main>
        <Product
          title="Fundamentals of Stock Market"
          img={Stock}
          price={8999}
          addToCart={addToCart}
        />
        <Product
          title="Web Development Zero To Hero"
          img={WebDev}
          price={1099}
          addToCart={addToCart}
        />
        <Product
          title="Introduction to Graphic Designing"
          img={Graphic}
          price={799}
          addToCart={addToCart}
        />
        <Product
          title="Computer Networks for GATE Exam"
          img={CompNetwork}
          price={499}
          addToCart={addToCart}
        />
        <Product
          title="Android Development (For Beginners)"
          img={Android}
          price={699}
          addToCart={addToCart}
        />
        <Product
          title="Time Management Course for Students"
          img={Time}
          price={299}
          addToCart={addToCart}
        />
      </main>
    </div>
  );
};

const Product = ({ title, img, price, addToCart }) => {
  return (
    <div className="products">
      <div className="img">
        <img src={img} className="product-img" alt={title} />
      </div>
      <div className="details">
        <div className="product-title">
          <a href="#" id="product-title">
            {title}
          </a>
        </div>
        <ul>
          <li>Beginner Friendly</li>
          <li>Certified by Chitkara University</li>
          <li>Lifetime Validity</li>
          <li>Certificate After Completion</li>
        </ul>
      </div>
      <p id="price">Rs.{price}</p>
      <button
        id="btn-cart"
        className="btn-cart"
        onClick={() => addToCart({ title, img, price })}
      >
        <i className="bi bi-cart-plus"></i> Add to cart
      </button>
    </div>
  );
};

export default Cart;
