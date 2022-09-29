import React, {Component} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Weather from './Weather';
import Movies from './Movies';
import Dining from './Dining';

class SearchResult extends Component {

  render() {
    return(
      <>
        {this.props.location.display_name &&
          <div className='Results d-flex flex-column align-items-center' >
            <div className='row d-flex g-4 justify-content-center' >
              <div className='Results-item col-sm-4 text-start p-2 mx-2'>
                <h2 className='text-center'>Results:</h2>
                <br />
                <p><b>City: </b>{this.props.location.display_name}</p>
                <p><b>Latitude: </b>{this.props.location.lat}</p>
                <p><b>Longitude: </b>{this.props.location.lon}</p>
              </div>
              <div className='Results-item col-auto p-2 mx-2'>
                <img src={this.props.mapUrl} alt='city map' width='500px' />
              </div>
            </div>
            <br />
            <Accordion className='w-75' >
              <Accordion.Item eventKey='0' className='Results-item text-center' >
                <Accordion.Header className='text-center' >Weather</Accordion.Header>
                <Accordion.Body>
                  <Weather data={this.props.weatherData} />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='1' className='Results-item' >
                <Accordion.Header className='text-center' >Movies</Accordion.Header>
                <Accordion.Body>
                  <Movies data={this.props.movieData} />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='2' className='Results-item' >
                <Accordion.Header className='text-center' >Dining</Accordion.Header>
                <Accordion.Body>
                  <Dining data={this.props.diningData} />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        }
      </>
    );
  }
}

export default SearchResult;