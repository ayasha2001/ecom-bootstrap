import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const ApiCallForm = ({ postData }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  const handleClick = () => {
    const newMovieObj = {
      title: title,
      text: text,
      date: date,
    };
    postData(newMovieObj);
    setText("");
    setTitle("");
    setDate("");
  };

  return (
    <Card className="mt-2 mb-2 p-2" style={{ width: "60%", margin: "auto" }}>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={handleChangeTitle}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Opening Text</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={text}
            onChange={handleChangeText}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Release Date</Form.Label>
          <Form.Control type="date" value={date} onChange={handleChangeDate} />
        </Form.Group>
      </Form>
      <Button
        variant="info"
        className="text-white font-weight-bold d-flex m-auto mt-4 mb-4"
        onClick={handleClick}
      >
        Add movie
      </Button>
    </Card>
  );
};

export default ApiCallForm;
