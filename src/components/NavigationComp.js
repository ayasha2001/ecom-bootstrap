import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartContext from "../context/CartContext";

const NavigationComp = ({ setCartOpen }) => {
  const cntxt = useContext(CartContext);
  const toggleCart = () => {
    setCartOpen((prev) => {
      return !prev;
    });
  };
  return (
    <Navbar
      bg="dark"
      variant="dark"
      style={{ fontFamily: "Metal Mania" }}
      className="fixed-top"
    >
      <Nav className="d-flex justify-content-between mx-auto">
        <Nav.Link
          href="/home"
          className="text-white fs-4"
          style={{ marginRight: "30px" }}
        >
          Home
        </Nav.Link>
        <Nav.Link
          href="#features"
          className="text-white fs-4"
          style={{ marginRight: "30px" }}
        >
          Store
        </Nav.Link>
        <Nav.Link
          href="#pricing"
          className="text-white fs-4  "
          style={{ marginRight: "30px" }}
        >
          About
        </Nav.Link>
      </Nav>
      <div style={{ marginRight: "20px" }}>
        <Button
          variant="outline-info"
          style={{ marginRight: "5px" }}
          onClick={toggleCart}
        >
          cart
        </Button>
        <label style={{ color: "#0dcaf0" }}>{cntxt.count}</label>
      </div>
    </Navbar>
  );
};

export default NavigationComp;
