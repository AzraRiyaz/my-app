// src/App.js

import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (  
    <div style={styles.pageContainer}>
      {/* Sticky Navbar */}
      <Navbar style={styles.navbar} />
      
      <div style={styles.contentWrap}>
        {/* Home Section */}
        <section id="home" style={{ ...styles.section, backgroundColor: '#f0f4f8', borderColor: '#d3d3d3' }}>
          <h1 style={styles.heading}>Welcome to My Portfolio</h1>
          <p style={styles.paragraph}>A brief introduction to who I am and what I do.</p>
        </section>

        {/* About Me Section */}
        <section id="about" style={{ ...styles.section, backgroundColor: '#e8eef1', borderColor: '#d3d3d3' }}>
          <h1 style={styles.heading}>About Me</h1>
          <p style={styles.paragraph}>
            Hi, I'm [Your Name], a [Your Profession] with a background in computer science and biomedical engineering.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" style={{ ...styles.section, backgroundColor: '#f8f9fa', borderColor: '#d3d3d3' }}>
          <h1 style={styles.heading}>My Projects</h1>
          <p style={styles.paragraph}>Here are some of the projects I've worked on:</p>
          <div style={styles.gallery}>
            <div style={styles.galleryItem}>
              <img src="project1.jpg" alt="Project 1" style={styles.projectImage} />
              <p><strong>Project 1:</strong> Description of Project 1.</p>
            </div>
            <div style={styles.galleryItem}>
              <img src="project2.jpg" alt="Project 2" style={styles.projectImage} />
              <p><strong>Project 2:</strong> Description of Project 2.</p>
            </div>
            <div style={styles.galleryItem}>
              <img src="project3.jpg" alt="Project 3" style={styles.projectImage} />
              <p><strong>Project 3:</strong> Description of Project 3.</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" style={{ ...styles.section, backgroundColor: '#eef2f3', borderColor: '#d3d3d3' }}>
          <h1 style={styles.heading}>My Skills</h1>
          <p style={styles.paragraph}>Here are some of my technical and soft skills:</p>
          <ul style={styles.skillList}>
            <li><strong>Python & Machine Learning</strong></li>
            <li><strong>Streamlit & React.js</strong></li>
            <li><strong>UI/UX Design</strong></li>
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{ ...styles.section, backgroundColor: '#f7f9fa', borderColor: '#d3d3d3' }}>
          <h1 style={styles.heading}>Contact Me</h1>
          <p style={styles.paragraph}>Feel free to contact me via email at <strong>your-email@example.com</strong>.</p>
        </section>
      </div>

      {/* Sticky Footer */}
      <Footer style={styles.footer} />
    </div>
  );
}

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: "'Roboto', sans-serif",
  },
  contentWrap: {
    flex: 1,
  },
  section: {
    padding: '4rem',
    textAlign: 'center',
    borderBottom: '2px solid',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#34495e',
    marginBottom: '1.5rem',
  },
  paragraph: {
    fontSize: '1.2rem',
    color: '#555',
    lineHeight: '1.6',
    maxWidth: '800px',
    margin: '0 auto',
  },
  gallery: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '1.5rem',
    marginTop: '2rem',
  },
  galleryItem: {
    border: '1px solid #d3d3d3',
    borderRadius: '8px',
    padding: '1rem',
    textAlign: 'center',
  },
  projectImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '1rem',
  },
  skillList: {
    listStyleType: 'circle',
    paddingLeft: '1.5rem',
    textAlign: 'left',
    margin: '0 auto',
    maxWidth: '600px',
  },
  footer: {
    width: '100%',
    backgroundColor: '#2c3e50',
    color: '#fff',
    textAlign: 'center',
    padding: '1.5rem',
    marginTop: 'auto',
    fontSize: '1rem',
  },
};

export default App;
