import SearchBar from '../../components/SearchBar/SearchBar';
import { getSearchMovies } from 'API/movieAPI';
import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Div } from 'components/Wrappers/Wrappers';
import { StyledLink } from '../../components/commonStyled';

const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = searchParams.get('query') ?? '';

  useEffect(() => {
    if (queryParams !== '') getSearchMovies(1, queryParams).then(setMovies);
  }, [queryParams]);

  const submitFilter = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <main>
      <SearchBar onSubmitFilter={submitFilter} />
      {movies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <Div as="li" p="2" key={movie.id}>
              <StyledLink to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </StyledLink>
            </Div>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Movies;
