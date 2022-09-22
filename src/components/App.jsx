import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';
import Cast from '../pages/Cast/Cast';
import Reviews from '../pages/Reviews/Reviews';
import Layout from '../components/Layout/Layout';
import PageNotFound from '../pages/PageNotFound';
import { lazy } from 'react';

const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
