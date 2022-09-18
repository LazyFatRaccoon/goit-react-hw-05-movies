import axios from 'axios'


const API_KEY = '824846cd36adb0fb9eb759610f56d292';
const BASE_URL = 'https://api.themoviedb.org/3';

const TREND_URL = `${BASE_URL}/trending/movie/week`;
const SEARCH_URL = `${BASE_URL}/search/movie`;
const MOVIE_ID_URL = `${BASE_URL}/movie/`;


//const GENRES_URL = `${BASE_URL}/genre/movie/list`;




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
      const { data } = await axios.get(
        `${MOVIE_ID_URL}${id}?api_key=${API_KEY}`
      );
      return data;
    } catch (error) {
      console.error(error);
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

//   async function getGenres() {
//     try {
//       const { data } = await axios.get(`${GENRES_URL}?api_key=${API_KEY}`);
//       return data;
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   async function getMovieTrailers(id) {
//     try {
//       const { data } = await axios.get(
//         `${MOVIE_ID_URL}${id}/videos?api_key=${API_KEY}`
//       );
//       return data.results;
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   //Modified functions
//   async function getModifiedMoviesList(page, query) {
//     try {
//       let movies;
//       if (!query) movies = await getTrendMovies(page);
//       if (query) movies = await getSearchMovies(page, query);
      
    
//       const genres = (window.sessionStorage && window.sessionStorage.getItem('genres')) ? JSON.parse(window.sessionStorage.getItem('genres')) : await getGenres();
//       if (!window.sessionStorage.getItem('genres')) sessionStorage.setItem('genres', JSON.stringify(genres));
//       const genresObj = genres.genres.reduce(
//          (acc, elem) => ((acc[elem.id] = elem.name), acc),
//          {}
//        );

//       const watchedList = JSON.parse(localStorage.getItem('watchedList')) || [];
//       const queueList = JSON.parse(localStorage.getItem('queueList')) || [];
      
//       const dataWithGenres = await Promise.all(movies.results.map(async (movie) => ({     
//         ...movie,
//         watched: watchedList ? watchedList.includes(movie.id) ? true : false : false,
//         queue: queueList ? queueList.includes(movie.id) ? true : false : false,
//         genre_ids: movie.genre_ids.map(id => genresObj[id]),
//       })));
//       return {...movies, results: dataWithGenres};
//     } catch (error) {
//       console.error(error);
//     }
//  }

//   async function getModifiedSingleMovie(id) {
//     try {
//       const movie = await getMovieById(id)
//       const genres = JSON.parse(window.sessionStorage.getItem('genres'))

//       const watchedList = JSON.parse(localStorage.getItem('watchedList')) || [];
//       const queueList = JSON.parse(localStorage.getItem('queueList')) || [];

//       const genresObj = genres.genres.reduce(
//         (acc, elem) => ((acc[elem.id] = elem.name), acc),
//         {}
//       );

//       const modifiedData = {     
//         ...movie,
//         watched: watchedList ? watchedList.includes(movie.id) ? true : false : false,
//         queue: queueList ? queueList.includes(movie.id) ? true : false : false,
//         genres: movie.genres.map(id => genresObj[id.id]),
//       };
//       return modifiedData;
//     } catch (error) {
//       console.error(error);
//     }
//   }

  export {getTrendMovies, getSearchMovies,getMovieById,getMovieCredits,getMovieReviews}
