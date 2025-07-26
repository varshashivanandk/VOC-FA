import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <nav className="navbar">
      <div className="logo"><h1> Varsha Shivanand K</h1></div>
      <ul className="nav-links">
        <li><Link to="/">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact" className="btn">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
