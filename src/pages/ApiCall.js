import React, { useState, useEffect, useCallback } from "react";
import ApiCallItem from "../components/ApiCallItem";
import { Button, Spinner, Alert, Card } from "react-bootstrap";
import ApiCallForm from "../components/ApiCallForm";

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

  //to not create this function everytime but only create it if some dependecy changess
  const fetchData = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    fetchData();
  }, []);
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
      <ApiCallForm />
      {error && (
        <Card
          className="mt-2 mb-2 p-2"
          style={{ width: "60%", margin: "auto" }}
        >
          <Alert variant="danger" className="text-center mt-4">
            {error}
            <Button
              variant="outline-danger"
              size="sm"
              className="ml-2"
              onClick={handleCancelRetry}
            >
              Cancel Retry
            </Button>
          </Alert>
        </Card>
      )}

      {isLoading && !error ? (
        <Spinner
          animation="border"
          className="d-flex m-auto mt-4 mb-4"
          variant="primary"
        />
      ) : (
        <Card
          className="mt-2 mb-2 p-2"
          style={{ width: "60%", margin: "auto" }}
        >
          {arr.map((item, i) => (
            <ApiCallItem key={i} item={item} />
          ))}
        </Card>
      )}
      {isBtnVisible && (
        <Card
          className="mt-2 mb-2 p-2"
          style={{ width: "60%", margin: "auto" }}
        >
          <Button
            variant="info"
            className="text-white font-weight-bold d-flex m-auto mt-4 mb-4"
            onClick={handleClick}
          >
            MAKE API CALL
          </Button>
        </Card>
      )}
    </div>
  );
};

export default ApiCall;
