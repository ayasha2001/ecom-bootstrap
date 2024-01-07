import React from "react";
import Product, { productsArr } from "./Product";
import { Container, Row, Col } from "react-bootstrap";
import HeadingComp from "./HeadingComp";
import FooterComp from "./FooterComp";
import Cart from "./cart/Cart";

const ContainerComp = () => {
  return (
    <Container fluid>
      <HeadingComp />
      <Container>
        <Row>
          {productsArr.map((product, index) => (
            <Col xs={6} key={index}>
              <Product {...product} />
            </Col>
          ))}
        </Row>
      </Container>
      <FooterComp/>
    </Container>
  );
};

export default ContainerComp;
