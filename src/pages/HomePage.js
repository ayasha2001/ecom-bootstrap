import React from "react";
import HomePageItem from "../components/HomePageItem";

const arr = [
  { date: "JUL16", place: "DETROIT, MI", detail: "DTE ENERGY MUSIC THEATRE" },
  { date: "JUL19", place: "TORONTO,ON", detail: "BUDWEISER STAGE" },
  { date: "JUL 22", place: "BRISTOW, VA", detail: "JIGGY LUBE LIVE" },
  { date: "JUL 29", place: "PHOENIX, AZ", detail: "AK-CHIN PAVILION" },
  { date: "AUG 2", place: "LAS VEGAS, NV", detail: "T-MOBILE ARENA" },
  { date: "AUG 7", place: "CONCORD, CA", detail: "CONCORD PAVILION" },
];

const HomePage = () => {
  return (
    <div>
      <h1
        style={{
          fontFamily: "Metal Mania",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Tours
      </h1>

      {arr.map((item,i) => {
        return (
          <HomePageItem
            date={item.date}
            place={item.place}
            detail={item.detail}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default HomePage;
