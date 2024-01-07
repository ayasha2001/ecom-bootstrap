import React from "react";
import "./Cart.css";

const CartItem = ({ imgSrc, itemName, price }) => {
  return (
    <div className="cart-row">
      <div className="cart-item cart-column d-flex align-items-center">
        <div className="image-container">
          <img className="cart-img prod-images" src={imgSrc} alt={itemName} />
        </div>
        <span className="ml-2">{itemName}</span>
      </div>
      <span className="cart-price cart-column">${price}</span>
      <div className="cart-quantity cart-column">
        <input type="text" className="form-control" />
        <button className="btn btn-danger mt-2">REMOVE</button>
      </div>
    </div>
  );
};

export default CartItem;
