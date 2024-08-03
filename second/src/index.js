import React from 'react';
import ReactDOM from 'react-dom/client';
import Movie from './Movie';
import MovieList from './MovieList';
import ActionMovieByClass from './ActionMovieByClass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <MovieList />
  </React.StrictMode>
);
