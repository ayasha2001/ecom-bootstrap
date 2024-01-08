import React, { useContext, useState } from "react";
import { Card, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {useNavigate} from "react-router-dom"
import AuthContext from "../context/AuthContext";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const nav = useNavigate()
  const cntxt = useContext(AuthContext)

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    setLoading(true);
    const data = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDqZwDjnF43ZY2c_T6j07yTFfJsQ1_09Rc",
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!data.ok) {
      alert("Authentication failed!");
      setLoading(false);
      return;
    }
    setLoading(false);
    setEmail("");
    setPassword("");
    const json = await data.json();
    cntxt.loginUser(json.idToken);
    nav("/store");
  };

  const handleClick = () => {
    handleLogin();
  };

  return (
    <Card className="mt-2 mb-2 p-2" style={{ width: "60%", margin: "auto" }}>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={handleChangePassword}
          />
        </Form.Group>
      </Form>
      {isLoading ? (
        <p>...Loading</p>
      ) : (
        <Button
          variant="info"
          className="text-white font-weight-bold d-flex m-auto mt-4 mb-4"
          onClick={handleClick}
        >
          Login User
        </Button>
      )}
    </Card>
  );
};

export default AuthForm;
