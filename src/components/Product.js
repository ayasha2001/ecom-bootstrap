import React, { useContext } from "react";
// import { Card, Button } from "react-bootstrap";
// import CartContext from "../context/CartContext";
import {Row, Col } from "react-bootstrap";

export const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    id: Math.random(),
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    id: Math.random(),
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    id: Math.random(),
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    id: Math.random(),
  },
];

const Product = ({ item }) => {
  
  return (
    <div>
      {
        <Row>
          {productsArr.map((product, index) => (
            <Col xs={6} key={index}>
              <Product item={product} />
            </Col>
          ))}
        </Row>
      }
    </div>
  );
};
export default Product;
