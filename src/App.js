import logo from './logo.svg';
import './App.css';
import Author from './Authors';
import Navbar from './Navbar';
import Footer from './Footer';
import Pagination from './Pagination';
import Becomeawriter from './Becomeawriter';
import { Data } from './Data';
import React, { useState } from 'react';


function App() {
  const [posts, setPosts] = useState(Data);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const howManyPages = Math.ceil(posts.length/postsPerPage)
  return (
    <div className="App">
      <Navbar />
     <Author      posts={currentPosts} />
     <Pagination postsPerPage={postsPerPage}
    pages = {howManyPages}
    totalPosts={posts.length} 
    setCurrentPage={setCurrentPage} />
         <Becomeawriter />
     <Footer />
    </div>
  );
}

export default App;
