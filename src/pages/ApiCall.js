import React, { useState } from "react";
import ApiCallItem from "../components/ApiCallItem";

const ApiCall = () => {
  const [arr, setArr] = useState([]);
  const handleClick = async () => {
    try {
      const data = await fetch("https://swapi.dev/api/films");
      const json = await data.json();
      setArr(json.results);
    } catch {
        console.log("error")
    }
  };
  return (
    <div>
      <button onClick={handleClick}>MAKE API CALL</button>
      {arr.map((item) => {
        return <ApiCallItem item={item} />;
      })}
    </div>
  );
};

export default ApiCall;
