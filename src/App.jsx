import React from 'react';
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

export default App;
