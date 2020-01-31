import React from 'react';
import MovieCard from './MovieCard'

class MovieList extends React.Component {
    render() {
        const listaFilmes = this.props.movies
        return (<div className='movieList'>
            {listaFilmes.map(filme => <MovieCard filme={filme} />)}
        </div>);
            }
        }
        
        export default MovieList;// implement MovieList component here
