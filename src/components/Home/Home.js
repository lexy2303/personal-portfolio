import React from "react";
import Lottie from 'lottie-react';
import animationData1 from '../../assets/animations/Animation - 1726050973069.json';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Type from "../Typewriter/Typewriter";
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

import './index.css';

const Home = () => {
  return (
    <div className="main-app-container">
      <div className="logo">
        <DeveloperModeIcon sx={{width: '130px', height: '130px', color: 'white'}}/>
      </div>
      <Navbar />
      <div className="header-container">
        <h1 className="header">Hi There!</h1>
        <h1 className="header"> I'm <span>Aleksandra Ivanova</span></h1>
        <Type />
      </div>
      <Lottie animationData={animationData1} loop={true} className="lottie-animation" />
      <Footer />
    </div>
  )
}

export default Home;