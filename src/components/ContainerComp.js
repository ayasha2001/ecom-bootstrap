import React, { useState } from "react";
import NavigationComp from "../components/NavigationComp";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import ProductItem from "./ProductItem";

export const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    review: "5 star product",
    id: "id1",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    review: "2 star product",
    id: "id2",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    review: "4 star product",
    id: "id3",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    review: "5 star product",
    id: "id4",
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
