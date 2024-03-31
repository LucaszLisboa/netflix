import React from "react";
import './Navbar.css';

export default function Navbar(){

  const logo = "https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png" 
  const avatar = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"

  return(
    <div className="nav-container">
      <img className="nav-logo" src={logo} alt="Netflix"></img>
      <img className="nav-avatar" src={avatar} alt="Avatar"></img>
    </div>
  )
}