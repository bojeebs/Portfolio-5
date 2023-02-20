import { Link } from 'react-router-dom'
import React from 'react'

const Nav = () => {
  return (
    
    <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <ul style={{ listStyle: 'none', display: 'flex' }}>
        <li style={{ marginRight: '10px' }}>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        <li>
          <Link to="/Resume">Resume</Link>
        </li>


      </ul>
    </nav>
  )
}
export default Nav