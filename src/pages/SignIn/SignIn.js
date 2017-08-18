import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import './SignIn.css';

class SignIn extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center align-item-center">
          <div className="col-md-4 col-xs-12 SignIn">
            <h1 className="text-center pb-4">Sign In</h1>
            <form className="SignIn__form">
              <div className="form-group">
                <label htmlFor="inputEmail">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password"
                />
              </div>
              <div className="d-flex flex-column justify-content-center">
                <button type="submit" className="btn btn-primary">
                  Sign In
                </button>
                <Link className="text-center pt-5" to="/signup">
                  Create new account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

SignIn.propTypes = {};

export default SignIn;
