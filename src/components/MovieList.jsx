import React from 'react';

import MovieCard from './MovieCard';


export default class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list">
        {this.props.movies.map(movie => (
          <MovieCard
            key={movie.title}
            movie={movie}
          />
        ))};
      </div>
    );
  }
}
