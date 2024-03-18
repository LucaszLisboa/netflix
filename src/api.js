const API_KEY = '011cb5d3d6e81f18cdb89e4a3192b13e'
const DNS = 'https://api.themoviedb.org/3'

export const categories = [
    {
        name: "trending",
        title: "Em Alta",
        path: "/trending/all/week?api_key="+API_KEY+"&language=pt-BR",
        isLarge: true,
    },
    {
        name: "netflixOriginals",
        title: "Originais Netflix",
        path: "/discover/tv?api_key="+API_KEY+"&with_networks=213",
        isLarge: false,
    },
    {
        name: "topRated",
        title: "Populares",
        path: "/movie/top_rated?api_key="+API_KEY+"&language=pt-BR",
        isLarge: false,
    },
    {
        name: "comedy",
        title: "Comédias",
        path: "/discover/tv?api_key="+API_KEY+"&with_genres=35",
        isLarge: false,
    },  
    {
        name: "romances",
        title: "Romances",
        path: "/discover/tv?api_key="+API_KEY+"&with_genres=10749",
        isLarge: false,
    },                
    {
        name: "documentaries",
        title: "Documentários",
        path: "/discover/tv/api_key="+API_KEY+"&with_genres=99",
        isLarge: false,
    }
]

export const getData = async (path) => {
    try{
        let URI = DNS + path
        let response = await fetch(URI)
        return response.json()
    } catch (error){
        console.log(error)
    }

}