// implement MovieList component here
import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    console.log(this.props, 'Xablau');
    return (
      <>
        {movies.map((mov) => (
          <MovieCard key={ mov.title } movies={ mov } />
        ))}
      </>
    );
  }
}

export default MovieList;
