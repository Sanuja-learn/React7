import React from 'react';
import Movies from './Movies';
import ActionMovieByClass from './ActionMovieByClass';
import './index.css';


function MovieList() {
  return (
    <div>
    <h2>Horror Movie</h2>
    <Movies />
    <h2>Action Movie</h2>
    <ActionMovieByClass />
   
    </div>
  )
}
export default MovieList;