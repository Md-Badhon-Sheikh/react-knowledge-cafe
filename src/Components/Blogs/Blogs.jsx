import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleBookmark, handleMarkAsRead}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
  <div className="w-2/3">
        <h2 className="text-3xl">Blogs: {blogs.length} </h2>
        {
          blogs.map(blog => <Blog 
            blog = {blog}
            key ={blog.id}
            handleBookmark = {handleBookmark}
            handleMarkAsRead = {handleMarkAsRead}
             ></Blog>)
        }
  </div>
);
};
Blogs.propTypes = {
  handleBookmark: PropTypes.function,
  handleMarkAsRead: PropTypes.function
}
export default Blogs;
