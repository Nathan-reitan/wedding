import React from 'react';
import { Link } from 'react-router-dom';

export default function Main(props) {
  return (
    <main className='px-2 d-flex flex-wrap justify-content-center text-center'>
      <div className='w-100'>
        <img className='w-100' src="./images/engagement.jpg" alt="Engagement Photo"/>
      </div>
      <div className='homeDateAddressContainer'>
        <h3 className='homeDate'>September 5, 2021</h3>
        <h3 className='homeLocation'>Fallbrook CA</h3>
      </div>
      <div className='w-100 d-flex justify-content-center'>
        <Link className='btn btn-secondary px-5' to='/rsvp'>RSVP</Link>
      </div>
      <div>
        <h4>WEDDING DAY</h4>
        <h6>SEPTEMBER 5, 2021</h6>
      </div>
    </main>
  );
}
