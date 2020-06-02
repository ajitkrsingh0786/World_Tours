import React from 'react';
import "./NavBar.scss";
import logo from "../../world_logo.jpeg";
export default function NavBar(){
    return(
     <nav className="navbar">
      <img src={logo} alt="world tours logo"/>
       <ul className="nav-links">
        <li>
            <a href="/" classNave="nav-links">Home</a>
            </li>
            <li>
            <a href="/" classNave="nav-links">About</a>
            </li>
            <li>
            <a href="/" classNave="nav-links">Tours</a>
            </li>
        </ul>
     </nav>

    )
}