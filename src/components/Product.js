import React from "react";
import { Card, Button } from "react-bootstrap";

export const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Product = ({ title, price, imageUrl }) => (
  <Card style={{ width: "18rem", margin: "15px" }}>
    <Card.Img variant="top" src={imageUrl} alt={title} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>Price: ${price}</Card.Text>
      <Button variant="info" className="text-white font-weight-bold">
        Add to Cart
      </Button>
    </Card.Body>
  </Card>
);

export default Product;
