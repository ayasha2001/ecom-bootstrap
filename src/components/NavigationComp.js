import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";
import HeadingComp from "./HeadingComp";

const NavigationComp = ({ setCartOpen }) => {
  const cntxt = useContext(CartContext);
  const toggleCart = () => {
    setCartOpen((prev) => {
      return !prev;
    });
  };
  return (
    <div>
      
      <Navbar
        bg="dark"
        variant="dark"
        style={{ fontFamily: "Metal Mania" }}
        className="fixed-top"
      >
        <Nav className="d-flex justify-content-between mx-auto">
          <Link
            to="/"
            className="text-white fs-4"
            style={{ marginRight: "30px" }}
          >
            Home
          </Link>
          <Link
            to="/store"
            className="text-white fs-4"
            style={{ marginRight: "30px" }}
          >
            Store
          </Link>
          <Link
            to="/about"
            className="text-white fs-4  "
            style={{ marginRight: "30px" }}
          >
            About
          </Link>
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
      <HeadingComp />
    </div>
  );
};

export default NavigationComp;