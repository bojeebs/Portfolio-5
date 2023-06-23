import { Link } from 'react-router-dom'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Aboutme from './Aboutme'
import Landing from './Home'
import Projects from './Projects'
import Resume from './Resume'

function Nav() {
  return (
    <nav className="navbar" style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <ul className="ulbar" style={{ listStyle: 'none', display: 'flex' }}>
        <li className="homenav">
          <a href="#home" className="about-link">Home</a>
        </li>
        <li className="skilllist">
          <a href="#skills" className="about-link">Skills</a>
        </li>
        <li className="projectlist">
          <a href="#projects" className="about-link">Projects</a>
        </li>
        <li className="aboutmelist">
          <a href="#aboutme" className="about-link">About Me</a>
        </li>
        {/* <li className="resumelist">
          <a href="#resume" className="about-link">Resume</a>
        </li> */}
      </ul>
    </nav>
  );
}

export default Nav;