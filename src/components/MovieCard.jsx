// implement MovieCard component here
import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { movies } = this.props;
    return <div>{movies.title}</div>;
  }
}

export default MovieCard;
