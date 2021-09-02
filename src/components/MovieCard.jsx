// implement MovieCard component here
import React, { Component } from 'react';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movies } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movies;
    console.log(title, 'K');
    return (
      <>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <img src={ imagePath } alt={ title } />
        <Rating rating={ rating } />
      </>
    );
  }
}

export default MovieCard;
