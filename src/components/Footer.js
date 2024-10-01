// src/components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2024 MyWebsite. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '0.5rem',  // Reduced padding for a smaller footer
    position: 'fixed',
    bottom: 0,
    width: '100%',
    fontSize: '0.9rem',  // Reduced font size to make the text smaller
  }
};

export default Footer;
