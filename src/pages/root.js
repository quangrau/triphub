import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';

import { Navbar } from 'components';
import { Home, SignIn, SignUp } from 'pages';

class Root extends Component {
  render() {
    if (
      !this.props.signedIn &&
      this.props.location.pathname !== '/signin' &&
      this.props.location.pathname.indexOf('/signup') !== 0
    ) {
      return <Redirect to="/signin" />;
    }
    return (
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route
          path="/"
          render={() =>
            <div className="App">
              <Navbar />
              <Route exact path="/" component={Home} />
            </div>}
        />
      </Switch>
    );
  }
}

Root.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  signedIn: PropTypes.bool
};

export default withRouter(
  connect(state => ({
    signedIn: state.session.signedIn
  }))(Root)
);
