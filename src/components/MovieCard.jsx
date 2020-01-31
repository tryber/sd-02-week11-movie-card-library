import React from 'react';
import Rating from './Rating';

export default class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div className = "movieDiv">
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={rating} />
        <img src={imagePath} alt = "movie cover" />
      </div>
    );
  }
}
