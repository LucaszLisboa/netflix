import './Home.css';
import { useEffect, useState } from 'react';

export default function Home(){

    const [tvs, setTVs] = useState();

    let getData = async () => {
        let API_KEY = '011cb5d3d6e81f18cdb89e4a3192b13e'
        let URI = 'https://api.themoviedb.org/3/genre/tv/list?api_key='+API_KEY
        let data = await fetch(URI)
        let response = data.json()
        return response
    }   

    useEffect(() => {
        getData().then((data) =>{
            setTVs(data)
        });
    }, [])

    let showTVs = () =>{
        let html = []
        tvs?.genres.forEach(element => {
            html.push(
                    <div key={element.id} className='tvs'>
                        <p> <label>ID:</label> {element.id}</p>
                        <p> <label>Name:</label> {element.name}</p>
                    </div>
                    )
        });
        return html
    }

    return(
        <div> 
            <h1>Teste</h1>
            {showTVs()}
        </div>
    )
}
