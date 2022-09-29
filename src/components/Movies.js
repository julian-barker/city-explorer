import React, {Component} from 'react';
import Movie from './Movie';

class Movies extends Component {

  render() {
      return(
      <div className='Movies Results-item mt-4' >
        <h3 className='text-center' >Local Movies</h3>
        <div>
          {this.props.data.map( v => <Movie key={v.id} data={v} ></Movie> )}

        </div>
      </div>
    )
  }
}

export default Movies;