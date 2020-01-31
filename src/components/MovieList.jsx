import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;

    return (
      <div>
        {movies.map((movie, i) => <MovieCard key={i} movie={movie} />)}
      </div>
    )
  }
}

export default MovieList;
