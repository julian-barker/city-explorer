import React, {Component} from 'react';

class Movies extends Component {

  render() {
      return(
      <div className='Results-item mt-4' >
        <h4 className='text-center' >Local Movies</h4>
        {this.props.movieData.map( v => {
          return (
              <div key={v.id} >
                <h6>{`${v.title} (⭐ ${v.rating})`}</h6>
                <div> {v.year} </div>
                <img src={v.posterUrl} alt={`poster for ${v.title}`} width='200px' />
                <div> {v.description} </div>
                <hr />
              </div>
          );
        })}
      </div>
    )
  }
}

export default Movies;