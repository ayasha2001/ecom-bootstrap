import React from "react";
import Product, { productsArr } from "./Product";
import { Container, Row, Col } from "react-bootstrap";
import HeadingComp from "./HeadingComp";
import FooterComp from "./FooterComp";

const ContainerComp = () => {
  return (
    <Container fluid>
      <HeadingComp />
      <Container>
        <Row>
          {productsArr.map((product, index) => (
            <Col xs={6} key={index}>
              <Product item={product} />
            </Col>
          ))}
        </Row>
      </Container>
      <FooterComp/>
    </Container>
  );
};

export default ContainerComp;
