import React from 'react';
import { Link } from 'react-router-dom';

export default function header(props) {
  return (
    <header className='header cursive m-2'>
      <div className='text-center'>
        <img src="./images/weddingHeader.png" alt="fancy text" className="headerImage"/>
        <div>
          <h1 className="headerTitle">Nathan + Mackenzie</h1>
        </div>
        <nav className="cursive">
          <div className="d-flex align-items-end">
            <ul className='list-unstyled d-flex justify-content-between flex-wrap w-100 navBar my-2'>
              <li><Link to='/home'>Home</Link></li>
              <li><Link to='/rsvp'>RSVP</Link></li>
              <li><Link to='/main'>Our Story</Link></li>
              <li><Link to='/location'>Location</Link></li>
              <li><Link to='/hotels'>Hotels</Link></li>
              <li><Link to='/registry'>Registry</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
