import React from 'react';
ass3
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditPostPage from './EditPostPage';
import HomePage from './HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit-post" element={<EditPostPage />} />
        {/* You can also add: <Route path="/create-post" element={<CreatePostPage />} /> */}
      </Routes>
    </Router>
  );
};
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
main

export default App;
