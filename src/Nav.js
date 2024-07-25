import React from "react";
import astro_logo from "./assets/astro_logo.png";
import './Nav.css';
function Nav (){
    
    return(
        <>
        <div className="navbar">
            <a href=""><img src={astro_logo} alt="logo"/></a>
            <div className="svg">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" fill="white"  y="0px" width="3.5vw" height="3.5vw" viewBox="0 0 50 50">
                <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
            </svg>
            </div>
        </div>
        <nav>
            <a href=""><img src={astro_logo} alt="logo"/></a>
            <a href="">ABOUT US</a>
            <a href="">PROJECTS</a>
            <a href="">BLOGS</a>
            <a href="">GALLERY</a>
            <a href="">FEST EVENTS</a>
        </nav>
        </>
    )
}
export default Nav;