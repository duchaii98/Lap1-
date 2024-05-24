import React, { useState } from "react";
import "./Type.css";
// tạo mảng chứa thông tin
const typelItem = [
  {
    name: "Hotels",
    count: 233,
    image: "./images/type_1.webp",
  },
  {
    name: "Apartments",
    count: 2331,
    image: "./images/type_2.jpg",
  },
  {
    name: "Resorts",
    count: 2331,
    image: "./images/type_3.jpg",
  },
  {
    name: "Villas",
    count: 2331,
    image: "./images/type_4.jpg",
  },
  {
    name: "Cabins",
    count: 2331,
    image: "./images/type_5.jpg",
  },
];
function Type() {
  function RenderType() {
    // hàm map để render các phần tử mảng trên
    return (
      <div className="container3">
        {typelItem.map((item) => {
          return (
            <div key={item.name}>
              <img
                className="img2"
                src={item.image}
                height="200px"
                width="150px"
              ></img>
              <div>
                <h2>
                  <strong>{item.name}</strong>
                </h2>
                <p style={{ color: "gray" }}>{item.count} hotels</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div className="box3">
      <h2>
        <strong>Browse by property type</strong>
      </h2>
      {RenderType()}
    </div>
  );
}
export default Type;
