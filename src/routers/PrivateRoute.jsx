import React, { Component } from 'react';
import { Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { mapCurrentUserToProps } from '../store/configureStore';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    rest.currentUser.name
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/log-in',
          state: { from: props.location }
        }} />
  )} />
);

export default connect(mapCurrentUserToProps)(PrivateRoute);