import React, { Component } from 'react';
import './App.css';
import {Route, Router, Switch} from "react-router-dom";
import {createBrowserHistory} from "history";

import Login from "./auth/login";
import CreatUser from './user/user';
import PersonalInfo from './personalinfo/personalinfo';
import Dashboard from "./dashboard.jsx";

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history} >
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/createuser' component={CreatUser} />
            <Route path='/personalinfo' component={PersonalInfo} />
            <Route path='/dashboard' component={Dashboard} />

            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
