import { getMovieById } from "API/movieAPI";
import { useParams, Outlet, useLocation, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react"
import { Div, P } from "components/Wrappers/Wrappers";
import AdditionalInfo from "components/AdditionalInfo/AdditionalInfo";

const MovieDetails = () => {
    const location = useLocation();
    const ref = useRef(location)
    console.log(location)
    console.log(ref)
    const refHref = (location.state) ? (location.hasOwnProperty('state').hasOwnProperty('from')) ? location.state.from : ref.current.state.from : '/movies';
     
  
    const { movieId }  = useParams();
    const [movie, setMovie] = useState(null);
    console.log(movieId)
    useEffect(() => {getMovieById(`${movieId}`).then(setMovie)},[movieId])

    if (!movie) {
        <p>Loading...</p>
        return
    }
    const raiting = (Number(movie.vote_average)*10).toFixed(0) + '%';
    const moviePoster =  (movie.poster_path) ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` : `https://www.prokerala.com/movies/malayalam/showlist-a.html`;
    const releaseYear =  movie.release_date ? String(movie.release_date).slice(0, 4) : 'N/A';
    const genres = movie.genres.reduce((acc,genre)=>acc + genre.name + ' ','')

    return (
      <Div>
        <Link to={refHref}> Back to USSA</Link>

        <Div display="flex" m='4'>
          <Div as='img' src={moviePoster} alt={movie.title} mr='4' />
          <Div width={1/2.5}>
            <P fontSize='xl' fontWeight="bold" m='2'>
              {movie.title} ({releaseYear})
            </P>
            <P fontSize="m">User Score: {raiting}</P>
            <P fontSize="l" fontWeight="bold">Overview</P>
            <P>{movie.overview}</P>
            <P fontSize="l" fontWeight="bold">Genres</P>
            <P>{genres}</P>
          </Div>
        </Div>
        <AdditionalInfo />
        <Outlet/>
      </Div>
    );
}

export default MovieDetails;