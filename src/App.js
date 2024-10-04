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

  // State and handlers for contact form
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  // Handle input changes in the contact form
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validate the contact form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  // Handle contact form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Form is valid; proceed with form submission
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }
  };

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
      padding: '30px', // Reduced padding
      textAlign: 'center',
      color: '#333',
    },
    projectsSection: {
      backgroundColor: '#f5f5dc', // Light beige background
      color: '#333',
      padding: '30px', // Reduced padding
    },
    heading: {
      color: '#2c3e50', // Darker heading
      fontSize: '2rem', // Reduced font size
      marginBottom: '15px', // Reduced margin
    },
    gallery: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px', // Reduced gap between gallery items
      flexWrap: 'wrap',
    },
    galleryItem: (isHovered) => ({
      backgroundColor: '#fff',
      padding: '15px', // Reduced padding for each item
      borderRadius: '10px',
      boxShadow: isHovered
        ? '0 6px 12px rgba(0, 0, 0, 0.2)'
        : '0 4px 8px rgba(0, 0, 0, 0.1)',
      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
      width: '200px', // Adjust the width to make items smaller
    }),
    projectImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '10px',
      marginBottom: '10px', // Reduced margin below the image
    },
    projectDescription: {
      color: '#555',
      fontSize: '0.9rem', // Reduced font size for descriptions
    },
    strong: {
      color: '#2980b9',
    },
    formContainer: {
      maxWidth: '400px',
      margin: 'auto',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    textarea: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    errorText: {
      color: 'red',
    },
    submitButton: {
      padding: '10px 15px',
      backgroundColor: '#2980b9',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.pageContainer}>
      <Navbar className="navbar" />

      <div style={styles.contentWrap}>
        <section id="home" style={styles.section}>
          <h1 style={styles.heading}>Welcome to My Portfolio</h1>
          <p className="paragraph">
            This is the home section where I provide a brief introduction to who I am and what I do.
          </p>
        </section>

        <section id="about" style={styles.section}>
          <h1 style={styles.heading}>About Me</h1>
          <p className="paragraph">
            Hi, I'm [Your Name], a [Your Profession]. I am passionate about leveraging technology to solve real-world problems...
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" style={{ ...styles.section, ...styles.projectsSection }}>
          <h1 style={styles.heading}>My Projects</h1>
          <p className="paragraph">Here are some of the projects I've worked on:</p>

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
                onClick={() => setSelectedProject(project.id)} // Open modal on click
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
          <p className="paragraph">Here are some of my technical and soft skills:</p>
          <ul className="skills-list">
            <li><strong>Python & Machine Learning:</strong> Proficient in developing ML models for data-driven applications.</li>
          </ul>
        </section>

        <section id="contact" style={styles.section}>
          <h1 style={styles.heading}>Contact Me</h1>
          <p className="paragraph">Feel free to contact me via the form below:</p>

          <form onSubmit={handleSubmit} style={styles.formContainer}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
              />
              {errors.name && <p style={styles.errorText}>{errors.name}</p>}
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
              />
              {errors.email && <p style={styles.errorText}>{errors.email}</p>}
            </div>
            <div>
              <label>Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={styles.textarea}
              />
              {errors.message && <p style={styles.errorText}>{errors.message}</p>}
            </div>
            <button type="submit" style={styles.submitButton}>Submit</button>
          </form>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default App;
