// implement MovieCard component here
import React from 'react';
import Rating from './Rating';
import movies from '../data';

class MovieCard extends React.Component {
    render() {
        const { title, subtitle, storyline, rating, imagePath } = this.props.movie
        return (
            <div className="movie-card">
                <img className="movie-card-image" src={imagePath} alt={title} />
                <h4>{title}</h4>
                <Rating />
            </div>
        )

    }
}

export default MovieCard;