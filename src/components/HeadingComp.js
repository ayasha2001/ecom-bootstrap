import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";

const HeadingComp = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div style={{ backgroundColor: "gray"}}>
      <div
        className="d-flex justify-content-center "
        style={{ backgroundColor: "gray", marginTop: "60px" }}
      >
        <h1
          className="text-white"
          style={{
            fontFamily: "Metal Mania",
            padding: "40px",
            fontSize: "100px",
          }}
        >
          The Generics
        </h1>
      </div>
      <div className="d-flex justify-content-center pb-4">
      {isHomePage && (
        <Button variant="outline-info" style={{color:"white"}}>Get Our Latest Album</Button>
      )}
      </div>
    </div>
  );
};

export default HeadingComp;
