import React, { useState } from "react";

import "./NavBar.css";
import Button from "../Button/Button";
// tạo mảng items
const items = [
  {
    type: "Stays",
    icon: "fa-solid fa-bed",
    active: true,
  },
  {
    type: "Flights",
    icon: "fa-solid fa-plane",
    active: false,
  },
  {
    type: "Car rentals",
    icon: "fa-solid fa-car",
    active: false,
  },
  {
    type: "Attractions",
    icon: "fa-solid fa-bed",
    active: false,
  },
  {
    type: "Airport taxis",
    icon: "fa-solid fa-taxi",
    active: false,
  },
];
function NavBar() {
  // sử dụng hàm map để render các phần tử trong mảng
  function renderItem() {
    return (
      <div className="boxNav">
        {items.map((item) => {
          return (
            <div
              key={item.type}
              className={`${
                item.active ? "container border" : "container icon"
              }`}
            >
              <i key={item.icon} className={item.icon} />
              <p className="text">{item.type}</p>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="NavBar">
      <header className="header">Booking Website</header>
      {/* gọi hàm */}
      {renderItem()}
      {/* hiện thị component button */}
      <Button />
    </div>
  );
}

export default NavBar;
