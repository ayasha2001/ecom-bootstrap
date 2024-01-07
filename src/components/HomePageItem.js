import React from "react";
import "./HomePageItem.css";

const HomePageItem = ({date,place,detail}) => {
  return (
    <div className="tour-item mt-2 mb-2" style={{ width: "50%", margin: "auto" }}>
      <span className="tour-date">{date}</span>
      <span className="tour-place">{place}</span>
      <span className="tour-spec-place">{detail}</span>
      <button className="buy-btn">BUY TICKETS</button>
    </div>
  );
};

export default HomePageItem;
