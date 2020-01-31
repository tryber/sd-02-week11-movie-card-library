import React from 'react';

import movies from '../data';
import MovieCard from './MovieCard';


export default class MovieList extends React.Component {
  render() {
    return (
      <div className='movie-list'>
        {movies.map(movie =>
          <MovieCard
            key={movie.title}
            title={movie.title}
            imagePath={movie.imagePath}
            subtitle={movie.subtitle}
            storyline={movie.storyline}
            rating={movie.rating}
          />
        )}
      </div>
    );
  }
}
