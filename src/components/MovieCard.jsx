import React from 'react';

import Rating from './Rating';

export default class MovieCard extends React.Component {
  render() {
    const { title, imagePath, subtitle, storyline, rating } = this.props.movie;
    return (
      <div className='movie-card'>
        <h4 className='movie-card-title'>{title}</h4>
        <div className='movie-card-body'>
          <h5 className='movie-card-subtitle'>{subtitle}</h5>
          <img className='movie-card-image' src={imagePath} alt=""/>
          <p className='movie-card-storyline'>{storyline}</p>
          <Rating className='movie-card-rating' rating={rating} />
        </div>
      </div>
    );
  }
}
