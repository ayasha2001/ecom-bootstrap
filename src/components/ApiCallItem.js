import React from "react";
import { Button } from "react-bootstrap";

const ApiCallItem = ({ item, deleteData }) => {
  const handleClick = () => {
    deleteData(item.id);
  };
  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.text}</p>
      <Button
        variant="danger"
        className="text-white d-flex m-auto mt-4 mb-4"
        onClick={handleClick}
      >
        DELETE
      </Button>
    </div>
  );
};

export default ApiCallItem;
