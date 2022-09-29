import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {searchVal: ''};
  }

  handleChange = (e) => {
    this.setState({searchVal: e.target.value})
  }

  render() {
    return (
      <form 
        className='SearchForm container d-flex flex-column align-items-start w-50 p-1'
        onSubmit={(e) => this.props.submit(this.state.searchVal, e)}
      >
        <Form.Label htmlFor="citySearch" className='ms-3'>Location</Form.Label>
        <div className='container d-flex' >
          <Form.Control
            type="text"
            id="citySearch"
            aria-describedby="searchHelp"
            onChange={this.handleChange}
          />
          <Button 
            onClick={(e) => this.props.submit(this.state.searchVal, e)}
            className='align-self-center ms-5'
          >Explore!</Button>
        </div>
        <Form.Text 
          id="searchHelp" 
          className='ms-3' 
          muted>
          Search for a location...
        </Form.Text>
      </form>
    )
  }
}

export default SearchForm;