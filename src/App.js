import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Login from './Login';

import './App.css';

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

export default App;
