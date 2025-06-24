import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>React Blog Editor</h1>
      <p>
        Welcome to the Blog Management App! 🎉
      </p>
      <p>
        This app allows you to <strong>create</strong> and <strong>edit</strong> blog posts with fields like:
      </p>
      <ul>
        <li>📝 Title</li>
        <li>📄 Content</li>
        <li>👤 Author</li>
        <li>📅 Publication Date</li>
      </ul>
      <p>
        Use the links below to get started:
      </p>
      <Link to="/edit-post">
        <button style={{ padding: '10px 20px', marginRight: '10px' }}>Edit Post</button>
      </Link>
      <Link to="/create-post">
        <button style={{ padding: '10px 20px' }}>Create New Post</button>
      </Link>
    </div>
  );
};

export default HomePage;
