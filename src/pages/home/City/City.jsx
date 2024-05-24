import React, { useState } from "react";
import "./City.css";
// tạo mảng chứa thông tin city
const cityItem = [
  {
    name: "Dublin",
    subText: "123 properties",
    image: "./images/city_1.webp",
  },
  {
    name: "Reno",
    subText: "533 properties",
    image: "./images/city_2.webp",
  },
  {
    name: "Austin",
    subText: "532 properties",
    image: "./images/city_3.webp",
  },
];
function City() {
  function RenderCity() {
    // hàm map render các phần tử trong mảng trên
    return (
      <div className="container2">
        {cityItem.map((item) => {
          return (
            <div key={item.name}>
              <img
                className="img1"
                src={item.image}
                height="200px"
                width="256px"
              ></img>
              <div className={`${item.name}`}>
                <h2>
                  <strong>{item.name}</strong>
                </h2>
                <p>
                  <strong>{item.subText}</strong>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  // hiện thị nội dung trên phần city
  return <div className="box">{RenderCity()}</div>;
}
export default City;
