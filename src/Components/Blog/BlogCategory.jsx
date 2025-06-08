import React, { useEffect, useState } from 'react';
import BlogFilterBar from './BlogFilter';
import BlogPagination from './BlogPagination'; 
import BlogCard from './BlogCardComponent';
import { blogData } from '../../data/blogData';
import './blog.css';


const BlogCategory = () => {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    // Directly set posts from imported data
    setPosts(blogData);
  }, []);

  const filtered = selectedCategory === "All"
    ? posts
    : posts.filter((post) => post.category === selectedCategory);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = filtered.slice(indexOfFirst, indexOfLast);

  return (
    <div className='BlogCategoryContainer'>
      <div className='BlogCatTitle'>Select Your Category</div>
      <BlogFilterBar selected={selectedCategory} setSelected={setSelectedCategory} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {currentPosts.map((post) => <BlogCard key={post.id} post={post} />)}
      </div>
      <BlogPagination
        currentPage={currentPage}
        totalPages={Math.ceil(filtered.length / postsPerPage)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default BlogCategory;
