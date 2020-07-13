import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// add Switch and Route to import statement above after router seperated by commas once incorporated
import Nav from './nav';
import Header from './header';
import Main from './main';
import Location from './location';
import Rsvp from './rsvp';

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <Header />
        <Nav />
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/location' component={Location}/>
          <Route path='/rsvp' component={Rsvp}/>
          <Route path='/main' component={Main} />
        </Switch>
      </Router>
    );
  }
}
