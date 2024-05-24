import React, { useState } from "react";
import styles from "./Button.module.css";
const Button = (props) => {
  // hiện thị ra nút Register, Login
  return (
    <div className={styles.contanier}>
      <button className={styles.nut} type="button">
        Register
      </button>
      <button className={styles.nut} type="button">
        Login
      </button>
    </div>
  );
};
export default Button;
