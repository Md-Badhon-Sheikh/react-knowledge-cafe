import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmark}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
  <div className="w-2/3">
        <h2>Blogs: {blogs.length} </h2>
        {
          blogs.map(blog => <Blog 
            blog = {blog}
            key ={blog.id}
            handleBookmark = {handleBookmark}
             ></Blog>)
        }
  </div>
);
};

export default Blogs;
