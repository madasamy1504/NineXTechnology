import React from "react";
import scrollimg from "../assets/scrollimg.png";
import './Header1.css'; // Create a separate CSS file for custom styling




export default function Header1(){
    return(
        <div className='scrollimgContain'>
        <img src={scrollimg} className='scrollimg m-hide' />
        </div>
    )
}