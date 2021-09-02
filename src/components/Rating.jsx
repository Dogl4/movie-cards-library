// implement Rating component here
import React, { Component } from 'react';

class Rating extends Component {
  render() {
    console.log(this.props, 'nota');
    return <p className="rating">{this.props.rating}</p>;
  }
}

export default Rating;
