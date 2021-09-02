// implement MovieList component here
import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <>
        {movies.map((movie) => (
          <MovieCard key={ movie.title } movies={ movie } />
        ))}
      </>
    );
  }
}

export default MovieList;
