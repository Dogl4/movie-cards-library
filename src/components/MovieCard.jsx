// implement MovieCard component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <div className="movie-card-body">
          <h4 className="movie-card-title">{movie.title}</h4>
          <h5 className="movie-card-subtitle">{movie.subtitle}</h5>
          <p className="movie-card-storyline">{movie.storyline}</p>
          <img className="movie-card-image" src={ movie.imagePath } alt={ movie.title } />
        </div>
        <div className="rigth">
          <Rating rating={ movie.rating } />
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
