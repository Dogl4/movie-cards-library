// implement MovieCard component here
import React, { Component } from 'react';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    console.log(this.props, 'K');
    return (
      <div className="movie-card">
        <div className="movie-card-body">
          <h4 className="movie-card-title">{movie.title}</h4>
          <h5 className="movie-card-subtitle">{movie.subtitle}</h5>
          <p className="movie-card-storyline">{movie.storyline}</p>
          <img className="movie-card-image" src={ movie.imagePath } alt={ movie.title } />
        </div>
        <Rating rating={ movie.rating } />
      </div>
    );
  }
}

export default MovieCard;
