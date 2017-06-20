import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';

import './App.css';

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const App = () => (
  <Router>
    <div>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

export default App;
