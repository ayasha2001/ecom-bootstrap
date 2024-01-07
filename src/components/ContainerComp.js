import React, { useState } from "react";
import NavigationComp from "../components/NavigationComp";
import Cart from "./cart/Cart";
import { Container } from "react-bootstrap";
import HeadingComp from "./HeadingComp";
import FooterComp from "./FooterComp";

const ContainerComp = ({ element }) => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <Container fluid>
      {/* <NavigationComp setCartOpen={setCartOpen} /> */}
      {cartOpen && <Cart />}
      <HeadingComp />
      <Container>{element}</Container>
      <FooterComp />
    </Container>
  );
};

export default ContainerComp;
