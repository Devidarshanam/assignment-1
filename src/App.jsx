import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import BlogPostList from './BlogPostList';

const samplePosts = [
  {
    id: '1',
    title: 'Understanding JavaScript Closures',
    summary: 'Dive deep into how closures work in JavaScript and why they’re a powerful feature for functional programming.',
    date: '2023-05-01',
    url: '/posts/1',
  },
  {
    id: '2',
    title: 'Optimizing React Performance',
    summary: 'Explore techniques like memoization, lazy loading, and React Profiler to improve performance in large React applications.',
    date: '2023-06-12',
    url: '/posts/2',
  },
  {
    id: '3',
    title: 'Deploying with Docker and GitHub Actions',
    summary: 'Learn how to automate deployments using Docker containers and GitHub Actions for CI/CD pipelines.',
    date: '2023-07-20',
    url: '/posts/3',
  },
];

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Blog Posts</h1>
        <BlogPostList posts={samplePosts} />
      </div>
    </BrowserRouter>
  );
};

export default App;
