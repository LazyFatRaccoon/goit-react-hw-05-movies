import {getTrendMovies} from '../../API/movieAPI'
import {useState, useEffect} from "react"


const Home = () => {
    const [movies, setMovies] = useState([])
    useEffect(()=>{
        getTrendMovies(1).then(setMovies)
    },[])
 
    return <main> <ul>
        {movies.map(movie=><li key={movie.id}>{movie.title}</li>)}
        </ul></main>
}

export default Home;