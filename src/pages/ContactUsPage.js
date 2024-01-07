import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const ContactUsPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handleClick = async () => {
    const user = {
      name: name,
      email: email,
      number: number,
    };
    setName("");
    setEmail("");
    setNumber("");

    const data = await fetch(
      "https://react-ecom-bootstrap-default-rtdb.asia-southeast1.firebasedatabase.app/contact.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }
    const json = await data.json();
    console.log(json);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangeNumber = (event) => {
    setNumber(event.target.value);
  };

  return (
    <Card className="mt-2 mb-2 p-2" style={{ width: "60%", margin: "auto" }}>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={name} onChange={handleChangeName} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email Id</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="date"
            value={number}
            onChange={handleChangeNumber}
          />
        </Form.Group>
      </Form>
      <Button
        variant="info"
        className="text-white font-weight-bold d-flex m-auto mt-4 mb-4"
        onClick={handleClick}
      >
        Submit
      </Button>
    </Card>
  );
};

export default ContactUsPage;
