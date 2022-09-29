import React, {Component} from 'react';

class Movie extends Component {
  render() {
    return (
      <div className='d-flex p-3' >
        <div className='mx-3 w-25' >
          <img src={this.props.data.posterUrl} 
            alt={`poster for ${this.props.data.title}`} 
            width='200px' 
          />
        </div>
        <div className='mx-3 w-75 d-inline text-start' >
          <h5>{`${this.props.data.title} (${this.props.data.year})`}</h5>
          <div> ⭐ {this.props.data.rating} </div>
          <br />
          <div> {this.props.data.description} </div>
        </div>
      </div>
    );
  }
}

export default Movie;