import React from "react";
import { useState, useEffect } from "react";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import GitHubIcon from '@mui/icons-material/GitHub';

import './index.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      if (window.screenY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <div className={scrolled ? "scrolled" : "main-navbar-container"}>
      <div className="navbar-container">
        <div className="home-box">
          <HomeIcon sx={{width: '25px', height: '25px', color: 'white'}}/>
          <a
            href="home" 
            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
            onClick={() => onUpdateActiveLink('home')}
          >Home</a> 
        </div>
        <div className="about-box">
          <AccountCircleIcon sx={{width: '25px', height: '25px', color: 'white'}}/>
          <a
            href="about"
            className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
            onClick={() => onUpdateActiveLink('about')}
          >About</a>
        </div>
        <div className="resume-box">
          <FilePresentIcon sx={{width: '25px', height: '25px', color: 'white'}}/>
          <a
            href="resume"
            className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'}
            onClick={() => onUpdateActiveLink('resume')}
          >Resume</a>
        </div>
      </div>
      <div className="git-icon-box">
        <GitHubIcon sx={{width: '25px', height: '25px', color: 'white'}}/>
      </div>
    </div>
  )
}

export default Navbar;