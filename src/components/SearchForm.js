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
      <form>
        <Form.Label htmlFor="citySearch">Location</Form.Label>
        <Form.Control
          type="text"
          id="citySearch"
          aria-describedby="searchHelp"
          onChange={this.handleChange}
        />
        {/* <Form.Text id="searchHelp" muted>
          Search for a location...
        </Form.Text> */}
        <Button onClick={(e) => this.props.submit(this.state.searchVal, e)} >Explore!</Button>
      </form>
    )
  }
}

export default SearchForm;