import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import './SignUp.css';

class SignUp extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center align-item-center">
          <div className="col-md-4 col-xs-12 SignUp">
            <h1 className="text-center pb-4">Sign Up</h1>
            <form className="SignUp__form">
              <div className="form-group">
                <label htmlFor="inputEmail">Display name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  aria-describedby="emailHelp"
                  placeholder="Enter your name"
                />
              </div>
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
                  Sign Up
                </button>
                <Link className="text-center pt-5" to="/signin">
                  Aldreay have account?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {};

export default SignUp;
