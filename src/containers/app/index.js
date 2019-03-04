import React, { useState, useEffect } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { baseGet } from 'libs/api';
import { URLS } from 'libs/constants';
import { startupUser } from 'duck/users/actions';

import Home from '../home';
import About from '../about';
import Trips from '../trips/trips';
import Login from '../login';
import Register from '../register';
import Trip from '../trip/trip';

function PrivateRoute({ component: Component, ...rest }) {
  const { isLoggedIn } = rest;
  return (
    <Route
      {...rest}
      render={props => (isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      ))
      }
    />
  );
}

const App = (props) => {
  const { startupUserCall, user } = props;
  console.log('app')
  useEffect(() => {
    startupUserCall();
  }, []);

  if (user.isLoading) {
    return null;
  }

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <PrivateRoute exact path="/trips" component={Trips} isLoggedIn={user.isLoggedIn}/>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <PrivateRoute exact path="/trip" component={Trip} isLoggedIn={user.isLoggedIn} />
    </Switch>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.users,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    startupUserCall: () => {
      dispatch(startupUser);
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
