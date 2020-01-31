import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;

    return (
      <div className="movie-card movie-card-body">
        <img src={imagePath} className="movie-card-image" alt="imagem do filme" />
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
        <Rating rating={rating} className="movie-card-rating" />
      </div>
    )
  }
}

export default MovieCard;
