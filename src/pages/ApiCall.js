import React, { useState } from "react";
import ApiCallItem from "../components/ApiCallItem";
import { Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const ApiCall = () => {
  const [arr, setArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isBtnVisible, setBtnVisible] = useState(true);

  const handleClick = async () => {
    setIsLoading(true);
    setBtnVisible(false);
    try {
      const data = await fetch("https://swapi.dev/api/films");
      const json = await data.json();
      setArr(json.results);
      setIsLoading(false);
    } catch {
      console.log("error");
    }
  };
  return (
    <div>
      {isBtnVisible && (
        <Button
          variant="info"
          className="text-white font-weight-bold d-flex m-auto mt-4 mb-4"
          onClick={handleClick}
        >
          MAKE API CALL
        </Button>
      )}

      {isLoading ? (
        <Spinner animation="border" className="d-flex m-auto mt-4 mb-4" variant="primary" />
      ) : (
        arr.map((item) => <ApiCallItem key={item.id} item={item} />)
      )}
    </div>
  );
};

export default ApiCall;
