import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div className="movie-card">
        <div className="card">
          <img src={imagePath} alt="Movie Poster" />
          <h4 className="title">{title}</h4>
          <h5 className="subtitle">{subtitle}</h5>
          <p className="storyline">{storyline}</p>
        </div>
        <Rating rating={rating} />
      </div>
    );
  }
}

export default MovieCard;
