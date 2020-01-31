import React from 'react';

class Rating extends React.Component {
  render() {
    const {rating} = this.props;
    return (
      <div className="movie-card-rating">
        <h6 className="rating">{rating}</h6>
      </div>
    );
  }
}
export default Rating;
