import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Login from './Login';
import Main from './Main';

import './App.css';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/about" component={Main} />
    </div>
  </Router>
);

export default App;
