import React, { useState, useEffect } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
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
  // const [isLoading, setLoading] = useState(true);
  // const [isAuthenticated, setAuth] = useState(false);

  // async function authenticateUser() {
    //   const response = await baseGet(URLS.user.isLoggedIn);
    //   const { loggedIn } = response.data;
    //   setAuth(loggedIn);
    //   setLoading(false);
    // }

    const { isLoggedIn } = rest;
    console.log('private route', isLoggedIn);
  //   // useEffect(() => {
  //   //   startupUser();
  //   // }, []);


  // console.log('boop')
  // console.log('user from private', user);


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
      <Route exact path="/trips" component={Trips} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <PrivateRoute exact path="/trip" component={Trip} user={user} isLoggedIn={user.isLoggedIn} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
