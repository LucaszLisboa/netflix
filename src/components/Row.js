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
        <div>
            {props.title}
            <div className='images'>
                {filmes?.map((filme) => {
                    let width = props.isLarge? 'large':'normal'
                    return <img className={width} key={filme?.id} src={image_host + filme.backdrop_path}></img> 
                })}
            </div>
        </div>
    )
}