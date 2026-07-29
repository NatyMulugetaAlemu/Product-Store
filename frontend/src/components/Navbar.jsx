import React from 'react'
import "../assets/styles/Navbar.css";

const Navbar = () => {
   return (
    <nav className="navbar">
      <div className="logo">
        MyStore
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      <div className="nav-actions">
        <button className="login-btn">
          Login
        </button>

        <button className="signup-btn">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;