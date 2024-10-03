import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Modal from './components/Modal'; // Import Modal component

function App() {
  // State to track hovered gallery item and modal visibility
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null); // For modal

  // Close the modal
  const closeModal = () => setSelectedProject(null);

  return (
    <div style={styles.pageContainer}>
      <Navbar style={styles.navbar} />

      <div style={styles.contentWrap}>
        <section id="home" style={{ ...styles.section, backgroundColor: styles.primaryColor, color: styles.textColorLight }}>
          <h1 style={styles.heading}>Welcome to My Portfolio</h1>
          <p style={styles.paragraph}>
            This is the home section where I provide a brief introduction to who I am and what I do.
          </p>
        </section>

        <section id="about" style={{ ...styles.section, backgroundColor: styles.secondaryColor }}>
          <h1 style={styles.heading}>About Me</h1>
          <p style={styles.paragraph}>
            Hi, I'm [Your Name], a [Your Profession]. I am passionate about leveraging technology to solve real-world problems...
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" style={{ ...styles.section, backgroundColor: styles.primaryColor, color: styles.textColorLight }}>
          <h1 style={styles.heading}>My Projects</h1>
          <p style={styles.paragraph}>Here are some of the projects I've worked on:</p>

          <div style={styles.gallery}>
            {/* Project 1 */}
            <div
              style={{
                ...styles.galleryItem,
                transform: hoveredIndex === 1 ? 'scale(1.05)' : 'scale(1)',
                boxShadow: hoveredIndex === 1 ? '0px 4px 20px rgba(0, 0, 0, 0.2)' : 'none',
              }}
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedProject(1)} // Open modal on click
            >
              <img src="https://s41721.pcdn.co/wp-content/uploads/2021/06/Robots-for-elderly-1.jpg" alt="Neuro Assistant Companion" style={styles.projectImage} />
              <p style={{ ...styles.paragraph, color: styles.textColorDark }}>
                <strong>Neuro Assistant Companion:</strong> A chatbot designed to help memory loss patients.
              </p>
            </div>
            {/* Additional projects go here following the same pattern */}
          </div>
        </section>

        <section id="skills" style={{ ...styles.section, backgroundColor: styles.secondaryColor }}>
          <h1 style={styles.heading}>My Skills</h1>
          <p style={styles.paragraph}>Here are some of my technical and soft skills:</p>
          <ul style={styles.skillsList}>
            <li><strong>Python & Machine Learning:</strong> Proficient in developing ML models for data-driven applications.</li>
            {/* Additional skills */}
          </ul>
        </section>

        <section id="contact" style={{ ...styles.section, backgroundColor: styles.primaryColor, color: styles.textColorLight }}>
          <h1 style={styles.heading}>Contact Me</h1>
          <p style={styles.paragraph}>Feel free to contact me via email at <strong>your-email@example.com</strong>.</p>
        </section>
      </div>

      <Footer style={styles.footer} />

      {/* Modal for Project Details */}
      {selectedProject && (
        <Modal projectId={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
}

const styles = {
  // ...existing styles here...
};

export default App;
