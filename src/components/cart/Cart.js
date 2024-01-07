import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { Button } from "react-bootstrap";
const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
];

const Cart = () => {
  return (
    <div
      className="d-flex"
      style={{
        maxWidth: "500px",
        height: "93%",
        boxShadow: "2px",
        border: "1px solid gray",
        padding: "5px",
        position: "fixed",
        bottom: 0,
        right: 0,
        backgroundColor: "white",
        zIndex: 9999,
        justifyContent: "center",
        borderRadius: "5px",
      }}
    >
      <section id="cart" className="container">
        <h2
          className="mt-4"
          style={{
            fontFamily: "Metal-Mania",
          }}
        >
          CART
        </h2>
        <div className="cart-row cart-header">
          <span
            className="cart-item cart-column"
            style={{
              fontFamily: "Metal-Mania",
            }}
          >
            ITEM
          </span>
          <span
            className="cart-price cart-column"
            style={{
              fontFamily: "Metal-Mania",
            }}
          >
            PRICE
          </span>
          <span
            className="cart-quantity cart-column"
            style={{
              fontFamily: "Metal-Mania",
            }}
          >
            QUANTITY
          </span>
        </div>
        <div className="cart-items">
          {cartElements.map((item)=>{
            return <CartItem imgSrc={item.imageUrl} itemName={item.title} price={item.price}/>
          })}
        </div>
      </section>
      <Button
        variant="outline-secondary"
        className="mt-2"
        style={{ height: "30px", paddingTop: "4px", paddingBottom: "8px" }}
      >
        X
      </Button>
    </div>
  );
};

export default Cart;
