import React, { useState, useEffect } from "react";
import { categories, getData } from "../../api";
import "./Banner.css";

export function Banner(){
  const[movie, setMovie] = useState({});
  const[firstCall, setFirstCall] = useState(true);

  const fetchRandomMovie = async () => {
    try{
      const netflixOriginalsCategory = categories.find( category => category.name === "netflixOriginals")
      const data = await getData(netflixOriginalsCategory.path)
      const movies = data
      const randomIndex = Math.floor(Math.random() * movies.length)
      setMovie(movies[randomIndex])
    }catch(error){
      console.log(error)
    }
  }

  useEffect(() =>{
    if(firstCall){
      fetchRandomMovie();
      setFirstCall(false);
    }else {
      setInterval(() => {
        fetchRandomMovie();
      }, 10000)
    }
  },[firstCall])

  let truncate = (str, allowedCharacters) => {
    return str?.length > allowedCharacters ? str?.substring(0, allowedCharacters - 1) + "..." : str;
  }

  return (
    <header 
      className="banner-container"
      style={{
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 1)), url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
        roundPosition: "center-center",
      }}
    >
      <div className="ml-24 pt-72 space-y-4">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1> 

        <div className="banner-description">
          <h2 className="text-xl font-medium">{truncate(movie?.overview, 150)}</h2>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="banner-button">
            Assistir
          </div>
          <div className="banner-button">
            Minha Lista
          </div>
        </div>
      </div>
    </header>
  )
}