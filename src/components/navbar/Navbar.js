import React from "react";

export function Navbar({usuario}) {

  const logo = "https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png" 
  const avatar = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"

  return(
    <div className="w-full h-20 flex justify-between fixed p-5 bg-gradient-to-b from-black to-transparent">
      <img className="nav-logo" src={logo} alt="Netflix"></img>
      <div className="flex gap-4">
        <p className="font-semibold text-2xl ">{usuario?.nome}</p>
        <img className="nav-avatar" src={avatar} alt="Avatar"></img>
      </div>
    </div>
  )
}