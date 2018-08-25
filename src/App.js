import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from './components/Landing'
import StatPage from './components/StatPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/statPage" component={StatPage} />
        </div>
      </Router>
      
    );
  }
}

export default App;
