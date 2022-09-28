import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import WeatherDay from './WeatherDay';

class Weather extends Component {

  render() {
    const weekly = [this.props.data.slice(0,7)].concat([this.props.data.slice(7,14)]);
    // console.log(weekly);
    return(
      <div className='Results-item container-fluid mt-4' >
        <h3 className='text-center' >Weather Forecast</h3>
        <Carousel className='carousel' >
          {weekly.map((v, i) => {
            return (
              <Carousel.Item className='' key={i} >
                <div className='row d-flex justify-content-center w-100 mx-auto' >
                  {weekly[i].map((v,i) => <WeatherDay key={i} data={v} ></WeatherDay>)}
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    )
  }
}

export default Weather;