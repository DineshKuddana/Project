import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <p className="navbar-logo">PrashnaAI  ✨</p>
      <ul className="nav-items">
      
        <li className="nav-link">Home</li>
        <li className="nav-link">Services</li>
        <li className="nav-link">About</li>
        <li className="nav-link">Contact Us</li>

      </ul>
    </div>
  );
}

export default Navbar;
