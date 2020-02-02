// implement MovieCard component here
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
      const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
      return (
        <div className="movie-card">
            <img className="movie-card-image" src={imagePath} alt={title} />
            <h4>{title}</h4>
            <h5>{subtitle}</h5>
            <p>{storyline}</p>
            <Rating rating={rating} />
        </div>
      );
    }
}

export default MovieCard;
