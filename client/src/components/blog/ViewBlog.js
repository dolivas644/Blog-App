import { useState, useEffect } from "react";
import ListBlog from "./ListBlog";
import Home from "../Home/Home"

const ViewBlog = ({ blog, setBlogToDisplay }) => {
    return (
        <>
            <button onClick={() => setBlogToDisplay(undefined)}>Back</button>{" "}
            <div className="card">
                <div className="container">
                    <br></br>
                    <img src={blog.image} alt="image0" height="30px" className="image"></img>
                    <br></br>
                    <h1>{blog.authorfirstname}{" "}{blog.authorlastname}</h1>
                    <br></br>
                    <p>{blog.text}</p>
                    
                </div>
            </div>
        </>
    );
};

export default ViewBlog;