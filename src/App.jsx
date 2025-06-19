import React from 'react';
import BlogPostDetail from './BlogPostDetail';

function App() {
  const blogPost = {
    title: "Introducing the Blog",
    content: `<p>Welcome to our blog! <a href="https://example.com" target="_blank" rel="noopener noreferrer">Read more</a>.</p>`,
    author: "Admin",
    date: "2023-01-01"
  };

  return <BlogPostDetail {...blogPost} />;
}

export default App;
