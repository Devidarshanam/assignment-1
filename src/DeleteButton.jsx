// src/DeleteButton.jsx
import React from 'react';
import styles from './DeleteButton.module.css';

const DeleteButton = ({ onClick }) => {
  return (
    <button
      className={styles.deleteButton}
      onClick={onClick}
      aria-label="Delete Post"
    >
      Delete
    </button>
  );
};

export default DeleteButton;
