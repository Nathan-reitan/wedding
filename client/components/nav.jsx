import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(props) {
  return (
    <nav className="navbar fixed-top cursive">
      <div className="container justify-content-center">
        <ul className='list-unstyled d-flex'>
          <li className='mr-3'><Link to='/rsvp'>RSVP</Link></li>
          <li className='mx-3'><Link to='/main'>Our Story</Link></li>
          <li className='mx-3'><Link to='/location'>Location</Link></li>
          <li className='ml-3'><a href="">Registry</a></li>
        </ul>
      </div>
    </nav>
  );
}
