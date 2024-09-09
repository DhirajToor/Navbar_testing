import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu when clicking the hamburger icon
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close the mobile menu when resizing to a larger screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 770) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <a href="#">Logo</a>
        </div>
        <div className="nav-items">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Home</a></li>
          </ul>
        </div>
        <div className="nav-button">
          <div className="anim-layer"></div>
          <a href="#">Sign Up</a>
        </div>
        <div id="hamburger-menu" onClick={toggleMobileMenu}>&#9776;</div>
      </div>

      <div id="mobile-menu" className={isMobileMenuOpen ? 'open' : ''}>
        <div className="mobile-nav-items">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Home</a></li>
          </ul>
        </div>
        <div className="mobile-nav-button">
          <div className="anim-layer"></div>
          <a href="#">Sign Up</a>
        </div>
        <div id="hamburger-cross" onClick={toggleMobileMenu}>&#10006;</div>
      </div>
    </>
  );
};

export default Navbar;
