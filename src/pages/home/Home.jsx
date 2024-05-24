import React, { useState } from "react";
import NavBar from "./Navbar/NavBar";
import Header from "./Header/Header";
import City from "./City/City";
import Type from "./Type/Type";
import stylee from "./Home.module.css";
import Hotel from "./Hotel/Hotel";
import Formreg from "./Formreg/Formreg";
import Footer from "./Footer/Footer";
import Search from "../search/Search";
import Detail from "../detail/Detail";
import DataRange from "../FormInput/DataRange";
const Home = () => {
  // hiện các Component
  return (
    <div>
      <div className={stylee.container}>
        <div className={stylee.container2}>
          <NavBar />
          <Header />
        </div>
      </div>
      <City />
      <Type />
      <Hotel />
      <Formreg />
      <Footer />
    </div>
  );
};

export default Home;
