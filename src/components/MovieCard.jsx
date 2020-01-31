// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    return (
      <div className="movie-list">
        <div className="movie-card-body">
          <div className="movie-card-image">
            <img src={this.props.imagem} alt={this.props.title}></img>
          </div>
          <div className="movie-card-title">
            {this.props.title}
          </div>
          <div className="movie-card-subtitle">
            {this.props.title}
          </div>
        </div>
      </div>
    )
  }
}

export default MovieCard;
