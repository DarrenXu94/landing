import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Landing from './components'
import StatPage from './components/pages/statsPage/StatPage'
import DashboardLanding from './components/pages/dashboard'
import ContextTesting from './components/pages/contextTesting'

import Fill from './components/styling/Fill'

import MyProvider from './MyProvider'
import { DASHBOARD_URL, STATPAGE_URL, CONTEXTTESTING_URL } from './config/Pages'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClone, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faClone, faInfoCircle)

class App extends Component {
  render() {
    return (
      <MyProvider>
        <Router>
          <Route
            render={({ location }) => (
              <Fill className="App">
                <TransitionGroup>
                  <CSSTransition key={location.key} classNames="fadeTranslate" timeout={300}>
                    <Switch location={location}>
                      <Route exact path="/" component={Landing} />
                      <Route exact path={STATPAGE_URL} component={StatPage} />
                      <Route exact path={DASHBOARD_URL} component={DashboardLanding} />
                      <Route exact path={CONTEXTTESTING_URL} component={ContextTesting} />

                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </Fill>
            )}
          />
        </Router>
      </MyProvider>


    );
  }
}

export default App;
