import React from 'react';

export default class Rating extends React.Component {
  render() {
    const { rating } = this.props
    return (
      <div>
        <p className = 'rating'>{rating}</p>
      </div>
    )
  }
}