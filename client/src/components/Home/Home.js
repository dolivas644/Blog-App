import React from "react";
import SidePage from "../Side/SidePage";
import home from "./home.css"
import ViewBlog from "../blog/ViewBlog";
import ListBlog from "../blog/ListBlog";
import AddBlog from "../blog/AddBlog";
import {useState } from "react";
const Home = () => {
    const [blogToDisplay, setBlogToDisplay] = useState();
    return (
        <>  
                <div className="flex-container">
                    <div className="flex-items">
                        <SidePage />
                    </div>
                    <div className="flex-items">
                    <div className="flex-container">
                    <div className="flex-items">
                        <div className="App">
                {blogToDisplay ? (
                    <ViewBlog blog={blogToDisplay} setBlogToDisplay={setBlogToDisplay} />
                ) : (
                    <ListBlog setBlogToDisplay={setBlogToDisplay} />
                )}
            </div>
                    </div>
                    <div className="flex-items">
                        <AddBlog />
                    </div>
                </div>
                    </div>
                </div>
        </>
    )
}

export default Home;