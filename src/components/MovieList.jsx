// implement MovieList component here

import React from 'react';
import MovieCard from './MovieCard.jsx';
//import movies from './data.js';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      <div>
        {movies.map(movie => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    )
  }
}

export default MovieList;
