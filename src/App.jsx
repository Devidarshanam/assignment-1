import React from 'react';
import BlogPostItem from './BlogPostItem';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Blog</h1>
      <BlogPostItem title="First Post" content="This is the content of the first post." />
      <BlogPostItem title="Second Post" content="Here is the second post content." />
    </div>
  );
}

export default App;
