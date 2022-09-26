import React, {Component} from 'react';
import SearchForm from './components/SearchForm';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {location: {}};

    this.submit = this.submit.bind(this);
  }

  async submit(searchVal, e) {
    e.preventDefault();
    try {
      const API = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${searchVal}&format=json`;
      const response = await axios.get(API);

      console.log(response.data);
      this.setState({location: response.data[0]});
    } catch (error) {
      
    }
  }

  renderResult = () => {
    return(
      <div>
        {this.state.location.display_name &&
        <>
          <div>City: {this.state.location.display_name}</div>
          <div>Latitude: {this.state.location.lat}</div>
          <div>Longitude: {this.state.location.lon}</div>
        </>
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
        <SearchForm submit={this.submit} />
        {this.renderResult()}
      </div>
    );
  }
}

export default App;
