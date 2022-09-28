import React, {Component} from 'react';

class Movie extends Component {
  render() {
    return (
      <div>
        <h5>{`${this.props.data.title} (${this.props.data.year})`}</h5>
        <div> ⭐ {this.props.data.rating} </div>
        <img src={this.props.data.posterUrl} alt={`poster for ${this.props.data.title}`} width='200px' />
        <div> {this.props.data.description} </div>
        <hr />
      </div>
    );
  }
}

export default Movie;