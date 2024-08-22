import axios from "axios"

export const categories = [
    {
        name: "trending",
        title: "Em Alta",
        path: "http://localhost:3001/emAlta",
        isLarge: true,
    },
    {
        name: "netflixOriginals",
        title: "Originais Netflix",
        path: "http://localhost:3001/originaisNetflix",
        isLarge: false,
    },
    {
        name: "topRated",
        title: "Populares",
        path: "http://localhost:3001/populares",
        isLarge: false,
    },
    {
        name: "comedy",
        title: "Comédias",
        path: "http://localhost:3001/comedias",
        isLarge: false,
    },  
    {
        name: "romances",
        title: "Romances",
        path: "http://localhost:3001/romances",
        isLarge: false,
    },                
    {
        name: "documentaries",
        title: "Documentários",
        path: "http://localhost:3001/documentarios",
        isLarge: false,
    }
]

export const getData = async (path) => {
    try{
        let URI = path
        let response = await axios.get(URI, {
            headers: {
                'token': sessionStorage.getItem('token')
            }
        })
        return response.data
    } catch (error){
        console.log(error)
    }
}