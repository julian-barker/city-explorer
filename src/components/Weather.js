import React, {Component} from 'react';

class Weather extends Component {

  render() {
      return(
      <div className='mt-4' >
        <h4 className='text-center' >Weather Forecast</h4>
        {this.props.weatherData.map((v,i) => {
          return (
            <div key={i} >
              <h6>{v.date}</h6>
              <p style={{textIndent: '1rem'}} >{v.description}</p>
            </div>
          );
        })}
      </div>
    )
  }
}

export default Weather;