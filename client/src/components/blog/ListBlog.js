import React from "react";
import { useState } from "react";
import ViewBlog from "./ViewBlog"
import { useEffect } from "react";
import Home from "../Home/Home"

const ListBlog = ({setBlogToDisplay}) =>{

    const [blogs, setBlogs] = useState([]);
    //get request to get contacts table
    const getBlogs = async () => {
        const response = await fetch(
            `http://localhost:6444/posts`
        );
        const blog = await response.json();
        console.log(blog);
        setBlogs(blog);
    }

    useEffect(() => {
        getBlogs();
    }, []);

    return (
        <>
            <div className="card">
                {blogs.map((blog, index) => {
                    return (
                        <div className="container">
                            <div className="contactIndividual">
                                <br></br>
                                <img src={blog.image} alt="img" className="image"></img>
                                <h1 onClick={() => setBlogToDisplay(blog)}>{blog.title}</h1>
                                <br></br>
                            </div>
                            <br></br>
                        </div>


                    )
                })}
            </div>
        </>
    );
}
export default ListBlog;