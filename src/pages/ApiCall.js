import React, { useState, useEffect } from "react";
import ApiCallItem from "../components/ApiCallItem";
import { Button, Spinner, Alert } from "react-bootstrap";

const ApiCall = () => {
  const [arr, setArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isBtnVisible, setBtnVisible] = useState(true);
  const [error, setError] = useState(null);

  const handleClick = () => {
    setIsLoading(true);
    setBtnVisible(false);
    setError(null);
    fetchData();
  };

  const fetchData = async () => {
    try {
      const data = await fetch("https://swapi.dev/api/films");
      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }
      const json = await data.json();
      setArr(json.results);
      setIsLoading(false);
      clearInterval(retryInterval);
    } catch (error) {
      console.error("API call error:", error);
      setError("Something went wrong. Retrying...");
      retryInterval = setInterval(retryFetchData, 5000);
    }
  };

  let retryInterval;

  const retryFetchData = () => {
    fetchData();
  };

  const handleCancelRetry = () => {
    setIsLoading(false);
    setBtnVisible(true);
    setError(null);
    clearInterval(retryInterval);
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

      {error && (
        <Alert variant="danger" className="text-center mt-4">
          {error}
          <Button variant="outline-danger" size="sm" className="ml-2" onClick={handleCancelRetry}>
            Cancel Retry
          </Button>
        </Alert>
      )}

      {isLoading && !error ? (
        <Spinner animation="border" className="d-flex m-auto mt-4 mb-4" variant="primary" />
      ) : (
        arr.map((item,i) => <ApiCallItem key={i} item={item} />)
      )}
    </div>
  );
};

export default ApiCall;
