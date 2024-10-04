// Modal.js
import React from 'react';

const Modal = ({ projectId, onClose }) => {
  // Define project details (could also be fetched from an API or stored in a state)
  const projectDetails = {
    1: {
      title: "Neuro Assistant Companion",
      description: "A chatbot designed to help memory loss patients. This project focuses on user interaction, memory recall, and assistance.",
      imageUrl: "https://s41721.pcdn.co/wp-content/uploads/2021/06/Robots-for-elderly-1.jpg",
    },
    2: {
      title: "Wearable PCG Device",
      description: "A device for continuous monitoring of heart sounds to detect abnormalities early. The wearable technology aims for user-friendly heart health management.",
      imageUrl: "https://ars.els-cdn.com/content/image/1-s2.0-S2666386421002526-gr1.jpg",
    },
    3: {
      title: "ECG Visualizer",
      description: "A tool to visualize the heart's electrical activity and aid in diagnosing cardiac conditions. This project uses advanced visualization techniques for better understanding.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVC1HRWRDn3QVYBJsxq2B86eOlWdziYvY5Q&s",
    },
  };

  const project = projectDetails[projectId];

  if (!project) return null;

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <button onClick={onClose} style={styles.closeButton}>X</button>
        <h2>{project.title}</h2>
        <img src={project.imageUrl} alt={project.title} style={styles.modalImage} />
        <p>{project.description}</p>
      </div>
    </div>
  );
};

const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
    position: 'relative',
  },
  modalImage: {
    width: '30%',
    marginBottom: '1rem',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'transparent',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
};

export default Modal;
