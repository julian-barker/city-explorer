import React, {Component} from 'react';
import Restaurant from './Restaurant';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Dining extends Component {

  render() {
      return(
      <div className='Dining Results-item mt-4' >
        <h2 className='text-center' >Local Eateries</h2>
        {/* <FontAwesomeIcon icon="fa-brands fa-yelp" /> */}
        <div>Powered by Yelp</div>
        <div>
          {this.props.data.map(v => <Restaurant key={v.id} data={v} ></Restaurant> )}
        </div>
      </div>
    )
  }
}

export default Dining;