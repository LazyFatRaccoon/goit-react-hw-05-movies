import { getMovieById } from 'API/movieAPI';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Div, P } from 'components/Wrappers/Wrappers';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';
import { BackLink } from '../../components/commonStyled';


const MovieDetails = () => {
  const location = useLocation();
  const backRef = location.state?.from ?? '/movies';

  // if (location.state?.from)
  //   localStorage.setItem('prevPage', JSON.stringify(location.state.from));
  // const refHref = localStorage.getItem('prevPage')
  //   ? JSON.parse(localStorage.getItem('prevPage'))
  //   : '/movies';

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  
  useEffect(() => {
    getMovieById(`${movieId}`).then(setMovie);
  }, [movieId]);
  // useEffect(() => {
  //   return () => localStorage.removeItem('prevPage');
  // }, []);

  if (!movie) {
    <p>Loading...</p>;
    return;
  }
  
  if (movie.response?.status === 404) return (
    <Div>
      <P fontSize="xl" m='3'> No such movie </P>
    </Div>
  ) 
  const raiting = (Number(movie.vote_average) * 10).toFixed(0) + '%';
  const moviePoster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`
    : `https://www.prokerala.com/movies/malayalam/showlist-a.html`;
  const releaseYear = movie.release_date
    ? String(movie.release_date).slice(0, 4)
    : 'N/A';
  const genres = movie.genres.reduce(
    (acc, genre) => acc + genre.name + ' ',
    ''
  );

  return (
    <Div>
      <Div m="4">
        <BackLink to={backRef}> Back to USSA</BackLink>
      </Div>
      <Div display="flex" m="4">
        <Div as="img" src={moviePoster} alt={movie.title} mr="4" />
        <Div width={1 / 2.5}>
          <P fontSize="xl" fontWeight="bold" m="2">
            {movie.title} ({releaseYear})
          </P>
          <P fontSize="m">User Score: {raiting}</P>
          <P fontSize="l" fontWeight="bold">
            Overview
          </P>
          <P fontSize="m">{movie.overview}</P>
          <P fontSize="l" fontWeight="bold">
            Genres
          </P>
          <P fontSize="m">{genres}</P>
        </Div>
      </Div>
      <AdditionalInfo linkRef={backRef}/>
      <Outlet />
    </Div>
  );
};

export default MovieDetails;
