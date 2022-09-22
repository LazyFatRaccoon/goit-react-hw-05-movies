import { getTrendMovies } from '../../API/movieAPI';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { StyledLink } from '../../components/commonStyled';
import { Div } from 'components/Wrappers/Wrappers';

const Home = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendMovies(1).then(setMovies);
  }, []);

  return (
    <main>
      {' '}
      <Div as="ul">
        {movies.map(movie => (
          <Div as="li" p="3" key={movie.id}>
            <StyledLink to={`movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </StyledLink>
          </Div>
        ))}
      </Div>
    </main>
  );
};

export default Home;
