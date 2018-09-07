import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Landing from './components'
import StatPage from './components/pages/statsPage/StatPage'
import DashboardLanding from './components/pages/dashboard'

import Fill from './components/styling/Fill'

class App extends Component {
  render() {
    return (
      <Router>
        <Route
          render={({ location }) => (
            <Fill className="App">
              <TransitionGroup>
                <CSSTransition key={location.key} classNames="fadeTranslate" timeout={300}>
                  <Switch location={location}>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/statPage" component={StatPage} />
                    <Route exact path="/dashboard" component={DashboardLanding} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </Fill>
          )}
        />
      </Router>

    );
  }
}

export default App;
