import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { Button, Form, Label, Input } from 'reactstrap';

import { login } from '../actions';
import Navigation from './Navigation';

import '../App.css';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    // console.log(process.env);
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    // class property called "login"
    e.preventDefault();
    this.props
      .login(this.state.credentials) // action creator called "login"
      .then(() => this.props.history.push('/'));
  };

  render() {
    return (
      <div>
        <Navigation />
        <div className='App-header'>
          <h1>Pintereach</h1>
          <p>Easily organize research articles from the web</p>
          <Form onSubmit={this.login}>
            <Label for="username">Username</Label>
            <Input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            <Label for="username">Password</Label>
            <Input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <Button>
              {this.props.isLoggingIn ? (
                <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
              ) : (
                'Log in'
              )}
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}


const mapStateToProps = ({error, isLoggingIn}) => ({
  error,
  isLoggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(Login);