import React from 'react';

class MovieCard extends React.Component {
    render() {
        const { title, subtitle, storyline, rating, imagePath } = this.props.filme;
        return (
            <div>
                <h4>{title}</h4>
                <h5>{subtitle}</h5>
                <p>{storyline}</p>
                <p>{rating}</p>
                <img src={imagePath}/>
            </div>
        )
    }
}

export default MovieCard
