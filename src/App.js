import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const styles = {
    pageContainer: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      fontFamily: "'Roboto', sans-serif",
      backgroundColor: '#f0f0f0',
    },
    contentWrap: {
      flex: 1,
      padding: '0 20px',
    },
    section: {
      padding: '40px',
      textAlign: 'center',
      color: '#333',
      borderBottom: '1px solid #ccc',
      backgroundColor: '#fff',
      borderRadius: '10px',
      margin: '20px 0',
    },
    projectsSection: {
      backgroundColor: '#f5f5dc',
    },
    heading: {
      color: '#2c3e50',
      fontSize: '2.5rem',
      marginBottom: '20px',
    },
    gallery: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
    },
    galleryItem: (isHovered) => ({
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: isHovered
        ? '0 8px 16px rgba(0, 0, 0, 0.2)'
        : '0 6px 12px rgba(0, 0, 0, 0.1)',
      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
      width: '250px',
      textAlign: 'left',
    }),
    projectImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '10px',
      marginBottom: '10px',
    },
    projectDescription: {
      color: '#555',
      fontSize: '1rem',
    },
    strong: {
      color: '#2980b9',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '400px',
      margin: '0 auto',
    },
    input: {
      width: '100%',
      padding: '12px',
      margin: '10px 0',
      borderRadius: '5px',
      border: '1px solid #ccc',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    textarea: {
      width: '100%',
      padding: '12px',
      margin: '10px 0',
      borderRadius: '5px',
      border: '1px solid #ccc',
      resize: 'none',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    error: {
      color: 'red',
      fontSize: '0.9rem',
    },
    successMessage: {
      color: 'green',
      fontSize: '1rem',
      margin: '10px 0',
    },
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid.";
    }
    if (!formData.message) errors.message = "Message is required.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log('Form Data:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' }); // Reset form
      setFormErrors({});
    } else {
      setFormErrors(errors);
    }
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
          <p>Hi, I'm [Your Name], a [Your Profession]. I am passionate about leveraging technology to solve real-world problems. I am a hard-working and driven individual who isn't afraid to face a challenge. I'm passionate about my work and I know how to get the job done. I would describe myself as an open and honest person who doesn't believe in misleading other people and tries to be fair in everything I do.</p>
        </section>

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
          <ul style={{ textAlign: 'left', margin: '0 auto', maxWidth: '600px' }}>
            <li><strong>Python & Machine Learning:</strong> Proficient in developing ML models for data-driven applications.</li>
            <li><strong>C/C++:</strong> Knowledgeable in systems programming and algorithm implementation.</li>
            <li><strong>Java:</strong> Experience with object-oriented programming and application development.</li>
            <li><strong>React JS:</strong> Building user interfaces and single-page applications.</li>
            {/* Add other skills as needed */}
          </ul>
        </section>

        <section id="contact" style={styles.section}>
          <h1 style={styles.heading}>Contact Me</h1>
          {isSubmitted && <p style={styles.successMessage}>Thank you for your message! I will get back to you shortly.</p>}
          <form style={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={styles.input}
            />
            {formErrors.name && <p style={styles.error}>{formErrors.name}</p>}
            
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={styles.input}
            />
            {formErrors.email && <p style={styles.error}>{formErrors.email}</p>}
            
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={styles.textarea}
              rows="5"
            />
            {formErrors.message && <p style={styles.error}>{formErrors.message}</p>}
            
            <button type="submit" style={{ ...styles.input, backgroundColor: '#2980b9', color: '#fff' }}>Send Message</button>
          </form>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default App;
