import React from 'react';
ass4
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

import BlogPostDetail from './BlogPostDetail';

function App() {
  const blogPost = {
    title: "Introducing the Blog",
    content: `<p>Welcome to our blog! <a href="https://example.com" target="_blank" rel="noopener noreferrer">Read more</a>.</p>`,
    author: "Admin",
    date: "2023-01-01"
  };

  return <BlogPostDetail {...blogPost} />;
main
}

export default App;
