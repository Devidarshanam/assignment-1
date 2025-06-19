import React, { useState, useEffect, useRef } from 'react';
import styles from './BlogPostItem.module.css';

const BlogPostItem = ({ title, content }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onCloseDialog();
    };

    if (showDialog) {
      dialogRef.current?.focus();
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showDialog]);

  const onCloseDialog = () => setShowDialog(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      setIsDeleting(false);
      setShowDialog(false);
      alert('Post deleted successfully!');
    }, 1500);
  };

  return (
    <div className={styles.blogPostItem}>
      <h2>{title}</h2>
      <p>{content}</p>
      <button
        className={styles.deleteButton}
        onClick={() => setShowDialog(true)}
        aria-label="Delete Post"
      >
        Delete
      </button>

      {showDialog && (
        <div className={styles.overlay} onClick={onCloseDialog}>
          <div
            className={styles.dialog}
            role="dialog"
            aria-labelledby="dialog-title"
            aria-describedby="dialog-description"
            tabIndex="-1"
            ref={dialogRef}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="dialog-title">Confirm Deletion</h2>
            <p id="dialog-description">Are you sure you want to delete this post?</p>
            <div className={styles.buttons}>
              <button onClick={onCloseDialog}>Cancel</button>
              <button onClick={handleDelete} disabled={isDeleting}>
                {isDeleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPostItem;
