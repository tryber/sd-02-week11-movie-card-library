// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
      return (
          <div className="movie-list">
              {this.props.movies.map((item) => 
              <MovieCard key={item.title} movie={item} />)}         
          </div>
        );
    }
}

export default MovieList;
