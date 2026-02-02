import React from 'react';
Challenge_2_blog-post-view-feature
import BlogPostDetail from './BlogPostDetail';

function App() {
  const blogPost = {
    title: "Introducing the Blog",
    content: `<p>Welcome to our blog! <a href="https://example.com" target="_blank" rel="noopener noreferrer">Read more</a>.</p>`,
    author: "Admin",
    date: "2023-01-01"
  };

  return <BlogPostDetail {...blogPost} />;

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
main
}

export default App;
