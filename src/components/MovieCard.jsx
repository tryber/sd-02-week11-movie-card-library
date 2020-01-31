import React from 'react';
class MovieCard extends React.Component {
    render() {
        const { tittle, subtitle, storyline, imagePath } = this.props.movie;
        return (
            <div>
                <img src={imagePath} />
                <h4>{tittle}</h4>
                <h5>{subtitle}</h5>
                <p>{storyline}</p>
            </div>
        )
    }
}
export default MovieCard;