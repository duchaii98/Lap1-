import React, { useState } from "react";
import "./Formreg.css";
function Formreg() {
  // hiện thị nội dung trên Formreg
  return (
    <div className="box5">
      <div className="container5">
        <h1 className="textForm">
          <strong>Save time, save money!</strong>
        </h1>
        <p className="textForm2">
          Sign up and we'll send the best deals to you
        </p>
        <form>
          <input
            className="formreg"
            type="text"
            placeholder="Your Email"
          ></input>
          <button className="btnForm" type="button">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
export default Formreg;
