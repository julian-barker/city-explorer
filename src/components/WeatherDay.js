import React, {Component} from 'react';

class WeatherDay extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className='weather-block col-3 border pt-2 text-start' >
        <h6 className='text-center' >{new Intl.DateTimeFormat('en-US', {weekday: 'short', day: 'numeric', month: 'short'}).format(new Date(data.date))}</h6>
        <p ><b>Low: </b>{data.low}</p>
        <p ><b>High: </b>{data.high}</p>
        <p >{`${data.description}`}</p>
      </div>
    );
  }
}

export default WeatherDay;