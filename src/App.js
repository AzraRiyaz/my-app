import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  // State to track hovered gallery item
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Inline Styles for the project section and other components
  const styles = {
    pageContainer: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    contentWrap: {
      flex: 1,
    },
    section: {
      padding: '30px',
      textAlign: 'center',
      color: '#333',
    },
    projectsSection: {
      backgroundColor: '#f5f5dc',
      color: '#333',
      padding: '30px',
    },
    heading: {
      color: '#2c3e50',
      fontSize: '2rem',
      marginBottom: '15px',
    },
    gallery: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
      flexWrap: 'wrap',
    },
    galleryItem: (isHovered) => ({
      backgroundColor: '#fff',
      padding: '15px',
      borderRadius: '10px',
      boxShadow: isHovered
        ? '0 6px 12px rgba(0, 0, 0, 0.2)'
        : '0 4px 8px rgba(0, 0, 0, 0.1)',
      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
      width: '200px',
    }),
    projectImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '10px',
      marginBottom: '10px',
    },
    projectDescription: {
      color: '#555',
      fontSize: '0.9rem',
    },
    strong: {
      color: '#2980b9',
    },
  };

  return (
    <div style={styles.pageContainer}>
      <Navbar />

      <div style={styles.contentWrap}>
        <section id="home" style={styles.section}>
          <h1 style={styles.heading}>Welcome to My Portfolio</h1>
          <p>This is the home section where I provide a brief introduction to who I am and what I do.</p>
        </section>

        <section id="about" style={styles.section}>
          <h1 style={styles.heading}>About Me</h1>
          <p>Hi, I'm [Your Name], a [Your Profession]. I am passionate about leveraging technology to solve real-world problems...</p>
        </section>

        {/* Projects Section */}
        <section id="projects" style={{ ...styles.section, ...styles.projectsSection }}>
          <h1 style={styles.heading}>My Projects</h1>
          <p>Here are some of the projects I've worked on:</p>

          <div style={styles.gallery}>
            {[
              {
                id: 1,
                img: "https://s41721.pcdn.co/wp-content/uploads/2021/06/Robots-for-elderly-1.jpg",
                title: "Neuro Assistant Companion",
                description: "A chatbot designed to help memory loss patients."
              },
              {
                id: 2,
                img: "https://ars.els-cdn.com/content/image/1-s2.0-S2666386421002526-gr1.jpg",
                title: "Wearable PCG Device",
                description: "A device for continuous monitoring of heart sounds to detect abnormalities early."
              },
              {
                id: 3,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVC1HRWRDn3QVYBJsxq2B86eOlWdziYvY5Q&s",
                title: "ECG Visualizer",
                description: "A tool to visualize the heart's electrical activity and aid in diagnosing cardiac conditions."
              }
            ].map((project) => (
              <div
                key={project.id}
                style={styles.galleryItem(hoveredIndex === project.id)}
                onMouseEnter={() => setHoveredIndex(project.id)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img src={project.img} alt={project.title} style={styles.projectImage} />
                <p style={styles.projectDescription}>
                  <strong style={styles.strong}>{project.title}:</strong> {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" style={styles.section}>
          <h1 style={styles.heading}>My Skills</h1>
          <p>Here are some of my technical and soft skills:</p>
          <ul>
            <li><strong>Python & Machine Learning:</strong> Proficient in developing ML models for data-driven applications.</li>
            {/* Add other skills as needed */}
          </ul>
        </section>

        <section id="contact" style={styles.section}>
          <h1 style={styles.heading}>Contact Me</h1>
          <p>Feel free to contact me via email at <strong>your-email@example.com</strong>.</p>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default App;
