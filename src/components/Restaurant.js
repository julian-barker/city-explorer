import React, {Component} from 'react';

class Restaurant extends Component {
  render() {
    const data =  this.props.data;
    const size = 'small';
    const stars = Math.trunc(data.rating);
    const half = ((data.rating * 10) % 10) === 0 ? '' : '_half';
    const starsPath = `../assets/yelp_stars/${size}/${size}_${stars}${half}@2x.png`;
    return(
      <div className='py-4' >
        <h5>{`${data.name} (${data.price})`}</h5>
        <img src={starsPath} alt='yelp stars' className='d-block mx-auto' />
        <br />
        <img src={data.imageUrl} alt={`poster for ${data.name}`} width='300px' />
        <div> Phone: {data.phone} </div>
        <a href={data.link} className='text-wrap' > Check Out on Yelp </a>
      </div>
    );
  }

}

export default Restaurant;