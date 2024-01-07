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
    let a = [];
    try {
      const data = await fetch(
        "https://react-ecom-bootstrap-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json"
      );
      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }
      const json = await data.json();
      for (const key in json) {
        a.push({ ...json[key], id: key });
      }
      setArr(a);
      setIsLoading(false);
    } catch (error) {
      console.error("API call error:", error);
      setError("Something went wrong. Retrying...");
    }
  }, []);

  const postData = async (movie) => {
    const data = await fetch(
      "https://react-ecom-bootstrap-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json",
      {
        method: "POST", // specify the HTTP method
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movie),
      }
    );
    const json = await data.json();
    fetchData();
  };

  const deleteData = async (movieId) => {
    try {
      const data = await fetch(
        `https://react-ecom-bootstrap-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${movieId}.json`,
        {
          method: "DELETE",
        }
      );
      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }
      fetchData();
    } catch (error) {
      console.error("Delete operation failed:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ApiCallForm postData={postData} />

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
            <ApiCallItem key={i} item={item} deleteData={deleteData} />
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
