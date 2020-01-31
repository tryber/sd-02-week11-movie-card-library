// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render () {
    const {title, subtitle, storyline, imagePath, rating} = this.props.movies
    return (
    <div className="moviecard">
      <img src={imagePath}/>
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      <p>{storyline}</p>
      <Rating rating={rating}/>
    
    
    </div>
    )
  }
}