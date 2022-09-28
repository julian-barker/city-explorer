import React, {Component} from 'react';
import SearchForm from './components/SearchForm';
import ErrorAlert from './components/ErrorAlert';
import SearchResult from './components/SearchResult';
import axios from 'axios';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class Restaurant {
  constructor(id, name, rating, price, phone, imageUrl, link) {
    this.id = id;
    this.name = name;
    this.rating = rating;
    this.price = price;
    this.phone = phone;
    this.imageUrl = imageUrl;
    this.link = link;
  }
}

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

  async submit(searchVal, e) {
    this.setState({error: false, location: {}});
    e.preventDefault();
    try {
      const locationKey = process.env.REACT_APP_LOCATION_IQ_KEY;
      // const server = process.env.REACT_APP_SERVER_ADDRESS;

      const locationResponse = await axios.get(`https://us1.locationiq.com/v1/search?key=${locationKey}&q=${searchVal}&format=json`);
      
      const loc = locationResponse.data[0];
      const city = loc.display_name.split(',')[0];
      
      const mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${locationKey}&center=${loc.lat},${loc.lon}&zoom=13&markers=icon:small-red-cutout|markerLocation=${loc.lat},${loc.lon}`
      
      const weatherResponse = await axios.get(`http://localhost:3001/weather?lat=${loc.lat}&lon=${loc.lon}`);
      // const weatherResponse = await axios.get(`${server}/weather?lat=${loc.lat}&lon=${loc.lon}`);
      const weatherData = weatherResponse.data;
      // const weatherResponse = await axios.get(`http://api.weatherbit.io/v2.0/forecast/daily?key=${weatherKey}&lat=${loc.lat}&lon=${loc.lon}`)
      // const weatherData = weatherResponse.data.data;

      const movieResponse = await axios.get(`http://localhost:3001/movies?query=${city}`);
      // const movieResponse = await axios.get(`${server}/movies?query=${city}`);
      const movieData = movieResponse.data;
      // const movieResponse = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${movieKey}&query=${city}`);
      // const movieData = movieResponse.data.results;

      // const diningResponse = await axios.get(`http://localhost:3001/dining?lat=${loc.lat}&lon=${loc.lon}`);
      // const diningResponse = await axios.get(`${server}/dining?query=${city}`);
      // console.log(diningResponse);
      // const diningData = diningResponse.data;
      // const movieData = movieResponse.data.results;


      const header = { Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}` }
      const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=restaurants&latitude=${loc.lat}&longitude=${loc.lon}`, { headers: header });
      const data = response.data.businesses.slice(0,20);
      const restaurants = data.map(v => new Restaurant(v.id, v.name, v.rating, v.price, v.phone, v.image_url, v.url));

      
      console.log(`%c${city}`, 'color: coral; font-weight: bold; font-size: 18px');
      console.log('%cWeather Data', 'color: lightblue; font-weight: bold; font-size: 14px');
      console.log(weatherResponse, weatherData);
      console.log('%cMovie Data', 'color: lightblue; font-weight: bold; font-size: 14px');
      console.log(movieResponse, movieData);
      console.log('%cDining Data', 'color: lightblue; font-weight: bold; font-size: 14px');
      // console.log(diningResponse, diningData);
      console.log(response, data, restaurants);
      
      this.setState({
        location: loc, 
        mapUrl: mapUrl, 
        weatherData: weatherData, 
        movieData: movieData,
        // diningData: diningData,
        diningData: restaurants
      });
    } catch (error) {
      console.log(error);
      this.setState({error: true, errorMessage: error.message})
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
