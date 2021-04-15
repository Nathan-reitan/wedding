import React from 'react';
import { Link } from 'react-router-dom';

export default function Main(props) {
  return (
    <main className='p-2 d-flex flex-wrap flex-column justify-content-center align-items-center text-center'>
      <div className='w-100'>
        <img className='w-100' src="./images/engagement.jpg" alt="Engagement Photo"/>
      </div>
      <div className='homeDateAddressContainer'>
        <h3 className='homeDate'>September 5, 2021</h3>
        <h3 className='homeLocation'>Fallbrook, CA</h3>
      </div>
      <div className='w-100 d-flex justify-content-center'>
        <Link className='btn btn-secondary px-5' to='/rsvp'>RSVP</Link>
      </div>
      <div className='homeLocation'>
        <h4>WEDDING DAY</h4>
        <h6>Sunday, September 5, 2021</h6>
        <h6>at</h6>
        <h4>Los Willows Wedding Estate</h4>
      </div>
      <div>
        <h1>DETAILS</h1>
        <div className='my-3'>
          <strong>
            Ceremony starts promptly at 4:00pm, shuttle service ends at 3:30pm.
          </strong>
        </div>
        <div className="d-flex flex-column align-items-start details">
          <h6>
            Dress Code: Formal Attire
          </h6>
          <div className="d-flex flex-column align-items-start">
            <p>Women: dresses, jumpsuits/rompers, pants and blouse.</p>
            <p>Men: slacks, button up shirt (tie & jacket optional)</p>
          </div>
        </div>
      </div>
    </main>
  );
}
