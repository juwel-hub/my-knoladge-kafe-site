import { useEffect, useState } from "react";
import Blog from '../Blog/Blog'
import PropTypes from 'prop-types'

const Blogs = ({handleBookmark,handleTime}) => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
    fetch('Blog.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-2/3">
            <h2 className="text-4xl">Blogs:{blogs.length} </h2>
            {
            blogs.map(blog=><Blog key={blog.id}blog={blog} handleBookmark={handleBookmark} handleTime={handleTime}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes={
    handleBookmark:PropTypes.function,
    handleTime:PropTypes.func
}
export default Blogs;