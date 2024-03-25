import { useEffect, useState } from 'react';
import { getData } from '../api'
import './Row.css';

export default function Row (props){
    const [filmes, setFilmes] = useState()
    let image_host = 'https://image.tmdb.org/t/p/original/'

    let fetchData = async () => {
        let response = await getData(props.path)
        return response
    }

    useEffect( () => {
        fetchData().then((data)=>{
            setFilmes(data?.results)
        })
    },[])

    return(
        <div className='row-container'>
            <h2 className='row-header'>{props.title}</h2>
            <div className='row-cards'> 
                {filmes?.map((filme) => {
                    return(
                        <img 
                            className={`movie-card ${props.isLarge && "movie-card-large"}` } 
                            key={filme?.id} 
                            src={image_host + (props.isLarge?filme.backdrop_path:filme.poster_path)}
                            alt={filme.name}>
                        </img> 
                    )
                })}
            </div>
        </div>
    )
}