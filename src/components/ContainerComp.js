import React from "react";
import Product, { productsArr } from "./Product";
import { Container, Row, Col } from "react-bootstrap";
import HeadingComp from "./HeadingComp";

const ContainerComp = () => {
  return (
    <Container fluid>
      <Container>
        <Row>
          {productsArr.map((product, index) => (
            <Col key={index}>
              <Product item={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default ContainerComp;
