// implement MovieList component here
import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <main>
        {movies.map((currentValue, index) => (
          <MovieCard key={ index } movie={ currentValue } />
        ))}
      </main>
    );
  }
}

export default MovieList;
