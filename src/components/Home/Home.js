import React from "react";
import Lottie from 'lottie-react';
import animationData1 from '../../assets/animations/Animation - 1726050973069.json';
import Navbar from "../Navbar/Navbar";

import './index.css';

const Home = () => {
  return (
    <div>
      <h1>lexy</h1>
      <Navbar />
      <Lottie animationData={animationData1} loop={true} className="lottie-animation" />
    </div>
  )
}

export default Home;