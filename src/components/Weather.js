import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Weather extends Component {

  render() {
    const weekly = [this.props.weatherData.slice(0,7)].concat([this.props.weatherData.slice(7,14)]);
    console.log(weekly);
    return(
      <div className='Results-item container-fluid mt-4' >
        <h4 className='text-center' >Weather Forecast</h4>
        <Carousel>
          <Carousel.Item className='row' >
            <div className='row d-flex justify-content-center w-100' >
              {weekly[0].map((v,i) => {
                return (
                  <div key={i} className='weather-block col-3 border text-start' >
                    <h6 className='text-center' >{v.date}</h6>
                    <p >{`Low: ${v.low}`}</p>
                    <p >{`High: ${v.high}`}</p>
                    <p >{`${v.description}`}</p>
                  </div>
                );
              })}
            </div>
          </Carousel.Item>
          <Carousel.Item className='row' >
            <div className='row d-flex justify-content-center' >
              {weekly[1].map((v,i) => {
                return (
                  <div key={i} className='weather-block col-3 border text-start' >
                    <h6 className='text-center' >{v.date}</h6>
                    <p >{`Low: ${v.low}`}</p>
                    <p >{`High: ${v.high}`}</p>
                    <p >{`${v.description}`}</p>
                  </div>
                );
              })}
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}

export default Weather;