import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";

const ProductItem = ({ item }) => {
  const { title, price, imageUrl,id } = item;
  const cntxt = useContext(CartContext);

  const addToCartHandler = () => {
    cntxt.onItemAdd({ ...item, quantity: 1 });
  };

  return (
    <Card style={{ width: "18rem", margin: "15px" }}>
      <Card.Img variant="top" src={imageUrl} alt={title} />
      <Card.Body>
        <Link to={`/store/${id}`}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Price: ${price}</Card.Text>
        </Link>
        <Button
          variant="info"
          className="text-white font-weight-bold"
          onClick={addToCartHandler}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
