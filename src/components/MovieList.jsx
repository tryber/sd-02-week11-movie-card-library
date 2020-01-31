import React from 'react'
import MovieCard from './MovieCard'

class MovieList {
    render () {
        const movies = this.props.movies;
        return (
            {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        )
    }
}