import React, {Component} from 'react';
import SearchForm from './components/SearchForm';
import ErrorAlert from './components/ErrorAlert';
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
    };

    this.submit = this.submit.bind(this);
  }

  async submit(searchVal, e) {
    e.preventDefault();
    try {
      const key = process.env.REACT_APP_LOCATION_IQ_KEY;
      const API = `https://us1.locationiq.com/v1/search?key=${key}&q=${searchVal}&format=json`;
      // const API = `https://us1.locationiq.com/v1/search?key=key&q=${searchVal}&format=json`;
      const response = await axios.get(API);
      const loc = response.data[0];

      const mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${key}&center=${loc.lat},${loc.lon}&zoom=13&markers=icon:small-red-cutout|markerLocation=${loc.lat},${loc.lon}`

      console.log(loc);
      this.setState({location: loc, mapUrl: mapUrl});
    } catch (error) {
      console.log(error);
      this.setState({error: true, errorMessage: error.message})
    }
  }

  renderResult = () => {
    return(
      <div>
        {this.state.location.display_name &&
        <>
          <div><b>City: </b>{this.state.location.display_name}</div>
          <div><b>Latitude: </b>{this.state.location.lat}</div>
          <div><b>Longitude: </b>{this.state.location.lon}</div>
          <hr />
          <img src={this.state.mapUrl} alt='city map' />
        </>
        }
        {this.state.error && 
          <ErrorAlert setShow={this.setShow} errorMessage={this.state.errorMessage} />
        }
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>City Explorer</h1>
        </header>
        <main>
          <SearchForm submit={this.submit} />
          <hr />
          {this.renderResult()}
        </main>
        <footer>
          &copy; Julian Barker, 2022
        </footer>
      </div>
    );
  }
}

export default App;
