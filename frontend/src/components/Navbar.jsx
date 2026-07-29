import React from 'react'
import "../assets/styles/Navbar.css";

const Navbar = () => {
   return (
    <nav className="navbar">
      <div className="logo">
        MyStore
      </div>

     

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