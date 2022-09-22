import axios from 'axios';

const API_KEY = '824846cd36adb0fb9eb759610f56d292';
const BASE_URL = 'https://api.themoviedb.org/3';

const TREND_URL = `${BASE_URL}/trending/movie/week`;
const SEARCH_URL = `${BASE_URL}/search/movie`;
const MOVIE_ID_URL = `${BASE_URL}/movie/`;

async function getTrendMovies(page) {
  try {
    const response = await axios.get(
      `${TREND_URL}?api_key=${API_KEY}&page=${page}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

async function getSearchMovies(page, query) {
  try {
    const { data } = await axios.get(
      `${SEARCH_URL}?api_key=${API_KEY}&query=${query}&page=${page}`
    );
    return data.results;
  } catch (error) {
    console.error(error);
  }
}

async function getMovieById(id) {
  try {
    const { data } = await axios.get(`${MOVIE_ID_URL}${id}?api_key=${API_KEY}`);
    return data;
  } catch (error) {
    window.location.href = '/goit-react-hw-05-movies/404';
    return;
  }
}

async function getMovieCredits(id) {
  try {
    const { data } = await axios.get(
      `${MOVIE_ID_URL}${id}/credits?api_key=${API_KEY}`
    );
    return data.cast;
  } catch (error) {
    console.error(error);
  }
}

async function getMovieReviews(id) {
  try {
    const { data } = await axios.get(
      `${MOVIE_ID_URL}${id}/reviews?api_key=${API_KEY}`
    );
    return data.results;
  } catch (error) {
    console.error(error);
  }
}

export {
  getTrendMovies,
  getSearchMovies,
  getMovieById,
  getMovieCredits,
  getMovieReviews,
};
