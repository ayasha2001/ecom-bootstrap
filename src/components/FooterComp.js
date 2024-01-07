import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Youtube, Facebook } from "react-bootstrap-icons";

const FooterComp = () => {
  return (
    <div style={{ backgroundColor: "#56CCF2" }}>
      <div className="d-flex justify-content-between">
        <h1
          className="text-white"
          style={{
            fontFamily: "Metal Mania",
            padding: "10px",
            fontSize: "60px",
          }}
        >
          The Generics
        </h1>
        <div
          className="d-flex justify-content-between "
          style={{ marginRight: "90px", marginTop: "30px" }}
        >
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube color="red" size={30} style={{ marginRight: "30px" }} />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook color="blue" size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterComp;
