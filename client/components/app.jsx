import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// add Switch and Route to import statement above after router seperated by commas once incorporated
import Nav from './nav';
import Header from './header';
import Main from './main';

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <Nav></Nav>
        <Header></Header>
        <Main></Main>
      </Router>
    );
  }
}
