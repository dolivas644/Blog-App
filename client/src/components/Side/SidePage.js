import React from "react";
import Side from "./Side.css"
import ImageIcon from "../Image/ImageIcon.jpeg"

const SidePage = () => {
    return (
        <>
            <div className="container">
                <header>
                    Welcome
                    <br></br>
                    to
                    <br></br>
                    Top
                    <br></br>
                    Husband-o
                </header>
                <br></br>
                <img src={ImageIcon} class="image" alt="titleImg"></img>
            </div>
        </>
    )
}

export default SidePage;