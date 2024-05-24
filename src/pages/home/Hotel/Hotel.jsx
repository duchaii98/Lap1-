import React, { useState } from "react";
import "./Hotel.css";
// tạo mảng chứa thông tin
const hotelItem = [
  {
    name: "Aparthotel Stare Miasto",
    city: "Madrid",
    price: 120,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_1.webp",
  },
  {
    name: "Comfort Suites Airport",
    city: "Austin",
    price: 140,
    rate: 9.3,
    type: "Exceptional",
    image_url: "./images/hotel_2.jpg",
  },
  {
    name: "Four Seasons Hotel",
    city: "Lisbon",
    price: 99,
    rate: 8.8,
    type: "Excellent",
    image_url: "./images/hotel_3.jpg",
  },
  {
    name: "Hilton Garden Inn",
    city: "Berlin",
    price: 105,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_4.jpg",
  },
];
function Hotel() {
  // function switchHotel chạy khi click vào
  function switchHotel() {
    // để điều hướng sang trang khác
    window.location.assign("http://localhost:3000/Detail ");
  }
  function RenderHotel() {
    return (
      // sử dụng hàm map để reder các phần tử trong mảng
      <div className="container4">
        {hotelItem.map((item) => {
          return (
            <div key={item.city}>
              <img src={item.image_url} height="200px" width="190px"></img>
              <div>
                {/* khi click vào đây thì switchHotel sẽ chạy */}
                <p className="textHotel" onClick={switchHotel}>
                  <b>{item.name}</b>
                </p>
                <p className="textHotel2">{item.city}</p>
                <p className="textHotel3">
                  <strong>Starting from ${item.price}</strong>
                </p>
                <p>
                  <span className="rate">{item.rate}</span> {item.type}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  // hiển thị danh sách các khách sạn trong giao diện của trang Hotel, trả về jsx
  return (
    <div className="box4">
      <h2>
        <strong>Homes guests love</strong>
      </h2>
      {RenderHotel()}
    </div>
  );
}
export default Hotel;
