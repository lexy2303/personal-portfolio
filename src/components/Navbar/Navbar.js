import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FilePresentIcon from '@mui/icons-material/FilePresent';

import './index.css';

const Navbar = () => {
  return (
    <div className="main-navbar-container">
      <div className="navbar-container">
        <div className="home-box">
          <HomeIcon sx={{width: '25px', height: '25px', color: 'white'}}/>
          <div className="home">Home</div>
        </div>
        <div className="about-box">
          <AccountCircleIcon sx={{width: '25px', height: '25px', color: 'white'}}/>
          <div className="about">About</div>
        </div>
        <div className="resume-box">
          <FilePresentIcon sx={{width: '25px', height: '25px', color: 'white'}}/>
          <div className="resume">Resume</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;