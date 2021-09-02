// implement MovieCard component here
import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { movies } = this.props;
    console.log(this.props, 'K');
    const { title, imagePath } = movies;
    return <img src={ imagePath } alt={ title } />;
  }
}

export default MovieCard;
