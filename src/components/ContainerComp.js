import React, { useState } from "react";
import NavigationComp from "../components/NavigationComp";
import Cart from "./cart/Cart";
import { Container } from "react-bootstrap";
import {Row,Col} from "react-bootstrap"
import ProductItem from "./ProductItem";

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

const ContainerComp = ({ element }) => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <Container fluid>
      <Container>
        <Row>
          {productsArr.map((product, index) => (
            <Col key={index}>
              <ProductItem item={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default ContainerComp;
