import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';

class ErrorAlert extends Component {

  render() {
    return(
      <Alert variant="danger" className='ErrorAlert'>
        <Alert.Heading>Uh Oh.....</Alert.Heading>
        <p>
          {this.props.errorMessage}
        </p>
      </Alert>
    );
  }
}

export default ErrorAlert;