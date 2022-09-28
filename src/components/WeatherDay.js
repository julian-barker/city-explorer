import React, {Component} from 'react';

class WeatherDay extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className='weather-block col-3 border pt-2 text-start' >
        <h5 className='text-center' >{data.date}</h5>
        <p ><b>Low: </b>{data.low}</p>
        <p ><b>High: </b>{data.high}</p>
        <p >{`${data.description}`}</p>
      </div>
    );
  }
}

export default WeatherDay;