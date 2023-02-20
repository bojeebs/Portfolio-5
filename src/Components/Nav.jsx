import { Link } from 'react-router-dom'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Aboutme from './Aboutme'
import Landing from './Home'
import Projects from './Projects'
import Resume from './Resume'

const Nav = () => {
  return (
    
    <nav className = "navbar" style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <ul className = "ulbar" style={{ listStyle: 'none', display: 'flex' }}>
        <li className = "homenav">
          <Link to="/" className="about-link">Home</Link>
        </li>
        <li className = "aboutmelist">
          <Link to="/AboutMe" className="about-link">About Me</Link>
        </li>
        <li className = "projectlist">
          <Link to="/Projects" className="about-link">Projects</Link>
        </li>
        <li className = "resumelist">
          <Link to="/Resume" className="about-link">Resume</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Nav