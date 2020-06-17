import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// add Switch and Route to import statement above after router seperated by commas
import Nav from './nav';

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <Nav></Nav>
      </Router>

    );
  }
}
