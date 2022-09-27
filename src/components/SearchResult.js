import React, {Component} from 'react';
import Weather from './Weather';

class SearchResult extends Component {

  render() {
    return(
      <>
        {this.props.location.display_name &&
          <div className='Results row d-flex justify-content-center' >
            <div className='Results-Data col-sm-4 text-start p-2'>
              <h2 className='text-center'>Results:</h2>
              <br />
              <p><b>City: </b>{this.props.location.display_name}</p>
              <p><b>Latitude: </b>{this.props.location.lat}</p>
              <p><b>Longitude: </b>{this.props.location.lon}</p>
              <Weather weatherData={this.props.weatherData} />
            </div>
            <div className='Results-Map col-auto p-2'>
              <img src={this.props.mapUrl} alt='city map' />
            </div>
          </div>
        }
      </>
    );
  }
}

export default SearchResult;