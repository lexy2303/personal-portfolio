import React from "react";
import Lottie from 'lottie-react';
import animationData1 from '../../assets/animations/Animation - 1726050973069.json';
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";

import './index.css';
import Type from "../Typewriter/Typewriter";

const Home = () => {
  return (
    <div>
      <h1>lexy</h1>
      <Navbar />
      {/* <Header /> */}
      <div className="header-container">
        <h1 className="header">Hi There!</h1>
        <h1 className="header"> I'm <span>Aleksandra Ivanova</span></h1>
        <Type />
      </div>
      <Lottie animationData={animationData1} loop={true} className="lottie-animation" />
    </div>
  )
}

export default Home;