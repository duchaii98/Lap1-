import React, { useState } from "react";
import FormInput from "../../FormInput/FormInput.jsx";
import style2 from "./Header.module.css";
// sử dụng moduel css
function Header() {
  // hiển thị ra nội dung trên phần header
  return (
    <div className={style2.Header}>
      <h1 className={style2.text1}>A lifetime of discounts? It's Genius.</h1>
      <p className={style2.text1}>
        Get rewarded for your travels - unlock instant savings of 10% or more
        with a free account
      </p>
      {/* nút */}
      <button className={style2.button} type="button">
        Singn in/Register
      </button>
      {/* hiện thị nội dung trên component FormINput */}
      <FormInput />
    </div>
  );
}
export default Header;
