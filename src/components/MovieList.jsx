import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
      const listaFilmes = this.props.movies;
      return (<div className="movie-list">
            {listaFilmes.map((filme) => <MovieCard key={filme.title} movie={filme} />)}
        </div>);
    }
}

export default MovieList;
