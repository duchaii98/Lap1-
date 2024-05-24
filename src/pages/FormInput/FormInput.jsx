import React, { useState } from "react";
import style3 from "./FormInput.module.css";
import { Calendar } from "react-date-range";
// import Search from "../search/Search";
import Search from "../search/Search";
import DataRange from "./DataRange";
function Form() {
  function switchPage() {
    // chuyển hướng sang trang mới
    window.location.assign("http://localhost:3000/search");
  }
  // hiện thị nội dung trang FormInput
  return (
    <form className={style3.Form}>
      <div className={style3.container}>
        <div className={style3.container3}>
          <i
            style={{ color: "gray", marginRight: "3px" }}
            className="fa-solid fa-bed gray"
          />

          <input
            className={style3.input}
            type="text"
            placeholder={`Where are you going?`}
          ></input>
        </div>
        {/* hiện thị nội dung component dataRange */}
        <DataRange />
        <div className={style3.container2}>
          <i
            style={{ color: "gray", marginRight: " 3px" }}
            class="fa-solid fa-person"
          ></i>
          <input
            className={style3.input}
            type="text"
            placeholder="1 adult 0 children 1 room"
          ></input>
        </div>
        {/* khi click vào sẽ chạy hàm switchpage */}
        <button onClick={switchPage} className={style3.btn} type="button">
          Search
        </button>
      </div>
    </form>
  );
}
export default Form;
