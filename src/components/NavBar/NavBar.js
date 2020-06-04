import React from 'react';
import "./NavBar.scss";
import logo from "../../world_logo.jpeg";
export default function NavBar(){
    return(
     <nav className="navbar">
      <img src={logo} alt="world tours logo"/>
       <ul className="navlinks">
        <li>
            <a href="/" classnave="navlink">Home</a>
            </li>
            <li>
            <a href="/" classnave="navlink">About</a>
            </li>
            <li>
            <a href="/" classnave="navlink">Tours</a>
            </li>
        </ul>
     </nav>

    )
}