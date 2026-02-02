import React from 'react';
import BlogPostForm from './BlogPostForm';

const EditPostPage = () => {
  const existingPost = {
    title: 'My First Blog Post',
    content: 'This is a sample blog post about React.',
    author: 'Sai Priya',
    date: '2025-06-14',
  };

  const handleUpdate = (data) => {
    console.log('Updated post:', data);
    alert('Post updated successfully!');
  };

  return (
    <div>
      <h2>Edit Blog Post</h2>
      <BlogPostForm post={existingPost} onSubmit={handleUpdate} />
    </div>
  );
};

export default EditPostPage;
