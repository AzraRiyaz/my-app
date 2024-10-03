import React from 'react';

const Modal = ({ projectId, onClose }) => {
  const projectDetails = {
    1: {
      title: 'Neuro Assistant Companion',
      description: 'A chatbot designed to help memory loss patients by providing prompts and reminders.',
      image: 'https://s41721.pcdn.co/wp-content/uploads/2021/06/Robots-for-elderly-1.jpg'
    },
    // Add more projects here
  };

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <button style={styles.closeButton} onClick={onClose}>X</button>
        <h2>{projectDetails[projectId].title}</h2>
        <img src={projectDetails[projectId].image} alt={projectDetails[projectId].title} style={styles.modalImage} />
        <p>{projectDetails[projectId].description}</p>
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
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    maxWidth: '600px',
    width: '100%',
    textAlign: 'center',
  },
  modalImage: {
    width: '100%',
    height: 'auto',
    marginBottom: '1rem',
  },
  closeButton: {
    background: 'red',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    fontSize: '1.2rem',
    position: 'absolute',
    top: '1rem',
    right: '1rem',
  },
};

export default Modal;
