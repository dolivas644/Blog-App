import React from "react";
import SidePage from "../Side/SidePage";
import home from "./home.css"
const Home = () => {
    return (
        <>  
                <div className="flex-container">
                    <div className="flex-container">
                        <SidePage />
                    </div>
                    <div className="flex-container">Vote feature</div>
                </div>

        
        </>
    )
}

export default Home;