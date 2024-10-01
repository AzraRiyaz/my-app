// src/components/Navbar.js

import React from 'react';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}><a href="#home" style={styles.navLink}>Home</a></li>
        <li style={styles.navItem}><a href="#about" style={styles.navLink}>About Me</a></li>
        <li style={styles.navItem}><a href="#projects" style={styles.navLink}>Projects</a></li>
        <li style={styles.navItem}><a href="#skills" style={styles.navLink}>Skills</a></li>
        <li style={styles.navItem}><a href="#contact" style={styles.navLink}>Contact</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    position: 'fixed',  // Ensures the navbar stays at the top of the page
    top: 0,
    width: '100%',
    backgroundColor: '#333',  // Dark background for the navbar
    padding: '1rem',
    zIndex: 1000,  // Ensures the navbar stays on top of other content
    boxShadow: '0 4px 2px -2px rgba(0, 0, 0, 0.2)',  // Adds a shadow for depth
  },
  navList: {
    display: 'flex',
    justifyContent: 'center',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 1.5rem',  // More spacing between items
  },
  navLink: {
    color: '#fff',  // White text color for links
    textDecoration: 'none',
    fontFamily: "'Roboto', sans-serif",  // Apply Roboto font
    fontWeight: '500',  // Slightly bolder text
    fontSize: '1.2rem',
    transition: 'color 0.3s ease',  // Smooth transition on hover
  },
  navLinkHover: {
    color: '#ffa500',  // Change to orange on hover
  },
};

export default Navbar;
