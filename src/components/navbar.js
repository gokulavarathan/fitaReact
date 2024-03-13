// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about/92">About</Link>
        </li>
        <li>
          <Link to="/service">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        
        <li>
          <Link to="/targetroute/5?fname=gokul&lname=varathan">Targetroute</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
