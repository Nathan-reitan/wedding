import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './nav';
import Header from './header';
import Main from './main';
import Location from './location';
import Rsvp from './rsvp';
import Hotels from './hotels';

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
          <Route path='/hotels' component={Hotels} />
        </Switch>
      </Router>
    );
  }
}
