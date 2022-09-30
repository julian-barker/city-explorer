import React, {Component} from 'react';
import SearchForm from './components/SearchForm';
import ErrorAlert from './components/ErrorAlert';
import SearchResult from './components/SearchResult';
import axios from 'axios';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        location: {},
        mapUrl: '',
        error: false,
        errorMessage: '',
        weatherData: [],
        movieData: [],
        diningData: []
    };

    this.submit = this.submit.bind(this);
  }

  async getCityData(loc) {
    try {
      const servers = {local: process.env.REACT_APP_LOCAL_ADDRESS, heroku: process.env.REACT_APP_HEROKU_ADDRESS}
      const currSource = process.env.REACT_APP_SERVER;
      const baseUrl = servers[currSource];
      console.log(baseUrl);
      
      const city = loc.display_name.split(',')[0];    
      console.log(`%c${city}`, 'color: coral; font-weight: bold; font-size: 18px');
      
      const weatherResponse = await axios.get(`${baseUrl}/weather?lat=${loc.lat}&lon=${loc.lon}`);
      const weatherData = weatherResponse.data.data;
      console.log('%cWeather Data', 'color: lightblue; font-weight: bold; font-size: 14px');
      console.log(weatherResponse, weatherData);
  
      const movieResponse = await axios.get(`${baseUrl}/movies?query=${city}`);
      const movieData = movieResponse.data.data;
      console.log('%cMovie Data', 'color: lightblue; font-weight: bold; font-size: 14px');
      console.log(movieResponse, movieData);
  
      const diningResponse = await axios.get(`${baseUrl}/dining?lat=${loc.lat}&lon=${loc.lon}`);
      const diningData = diningResponse.data.data;
      console.log('%cDining Data', 'color: lightblue; font-weight: bold; font-size: 14px');
      console.log(diningResponse, diningData);
  
  
      return {
        weatherData: weatherData,
        movieData: movieData,
        diningData: diningData
      };
    } catch (error) {
      console.log(error);
      this.setState({error: true, errorMessage: error.message});
    }
  }

  async submit(searchVal, e) {
    this.setState({error: false, location: {}});
    e.preventDefault();
    try {
      const locationKey = process.env.REACT_APP_LOCATION_IQ_KEY;
      const servers = {local: process.env.REACT_APP_LOCAL_ADDRESS, heroku: process.env.REACT_APP_HEROKU_ADDRESS}
      const currSource = process.env.REACT_APP_SERVER;
      const baseUrl = servers[currSource];
      console.log(baseUrl);

      const locationResponse = await axios.get(`https://us1.locationiq.com/v1/search?key=${locationKey}&q=${searchVal}&format=json`);
      const loc = locationResponse.data[0];
      const mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${locationKey}&center=${loc.lat},${loc.lon}&zoom=13&markers=icon:small-red-cutout|markerLocation=${loc.lat},${loc.lon}`

      const { weatherData, movieData, diningData } = await this.getCityData(loc);
      
      this.setState({
        location: loc, 
        mapUrl: mapUrl, 
        weatherData: weatherData, 
        movieData: movieData,
        diningData: diningData,
      });
    } catch (error) {
      console.log(error);
      this.setState({error: true, errorMessage: error.message});
    }
  }

  render() {
    return (
      <div className="App">
        <header className='mb-3 py-2'>
          <h1>City Explorer</h1>
        </header>
        <main className='p-2'>
          <SearchForm submit={this.submit} />
          {this.state.error && 
            <ErrorAlert errorMessage={this.state.errorMessage} />
          }
          <hr />
          <SearchResult 
            location={this.state.location} 
            mapUrl={this.state.mapUrl} 
            weatherData={this.state.weatherData} 
            movieData={this.state.movieData}
            diningData={this.state.diningData}
          />
        </main>
        <div className='footer' ></div>
        <footer className='py-4'>
          &copy; Julian Barker, 2022
        </footer>
      </div>
    );
  }
}

export default App;
