// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div className="movie-list">
        {this.props.movies.map(item => 
          <MovieCard key={item.title} title={item.title} subtitle={item.subtitle}
          storyline={item.storyline} rating={item.rating} imagePath={item.imagePath} />)}
      </div>
    );
  }
}

export default MovieList;
