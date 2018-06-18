import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LandingPage from '../containers/LandingPage';
import GamePage from '../containers/GamePage';
import HelpPage from '../containers/HelpPage';
import LogInPage from '../containers/LogInPage';
import SignUpPage from '../containers/SignUpPage';
import NotFoundPage from '../containers/NotFoundPage';
import UsersRouter from './UsersRouter';
import PrivateRoute from './PrivateRoute';

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="wrapper">
          <Header />
          <Switch>
            <Route exact path={`/`}  component={LandingPage} />
            <PrivateRoute path={`/play`} component={GamePage} />
            <Route path={`/users`} component={UsersRouter}/>
            <Route path={`/help`} component={HelpPage} />
            <Route path={`/log-in`} component={LogInPage} />
            <Route path={`/sign-up`} component={SignUpPage} />
            <Route component={NotFoundPage} />
          </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default AppRouter;