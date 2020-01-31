import React from 'react'

class MovieList extends React.Component {
  render () {
    const { movies } = this.props;
    return (
     <div className="cardsContainer">
       {movies.map((movie, index) => <MovieCard key={index} movie={movie} />)}
     </div> 
    )
  }
}

export default MovieList