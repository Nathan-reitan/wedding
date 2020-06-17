import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(props) {
  return (
    <nav className="navbar fixed-top">
      <div className="container">
        <a href="#page-top">
          Mr. & Mrs. Reitan
        </a>
        <button className="navbar-toggler navbar-toggler-right text-muted collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu (to become drop down for list)
          <i className="fas fa-bars"></i>
        </button>
        <div>
          <ul className='list-unstyled'>
            <li><Link to='/rsvp'>RSVP</Link></li>
            <li><Link to='/ourStory'>Our Story</Link></li>
            <li><a href="">Wedding Registry(need to create registry and then link)</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
