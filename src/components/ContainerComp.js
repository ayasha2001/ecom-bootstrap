import React, { useState } from "react";
import NavigationComp from "../components/NavigationComp";
import Cart from "./cart/Cart";
import { Container } from "react-bootstrap";
import HeadingComp from "./HeadingComp";

const ContainerComp = ({ element }) => {
  const [cartOpen, setCartOpen] = useState(false);
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
