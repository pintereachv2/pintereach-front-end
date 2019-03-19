import React, { Component, setGlobal } from 'reactn';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import axios from 'axios'
// import './App.css';
import Navigation from './Navigation';
// import Login from './components/Login';
// import Home from './components/Home';
// import PrivateRoute from './components/PrivateRoute';
import { register } from '../actions';
import { env } from '../environment';

class Register extends Component {
  state = {
    registration: {
      email: '',
      username: '',
      password: ''
    }
  }

  handleChange = e => {
    console.log(process.env);
    this.setState({
      registration: {
        ...this.registration,
        [e.target.name]: e.target.value
      }
    })
  }

  register = e => {
    // class property called "register"
    e.preventDefault();
    this.props
      .register(this.state.registration) // action creator called "register"
      .then(() => this.props.history.push('/login'));
    const creds = this.state.registration
    axios.post(`${URL}/api/login`, creds)
      .then(res => {
        setGlobal({isRegistered:true})
        localStorage.setItem("jwt", res.data.token);
      });
  };

  render() {
    return (

      <div className="App">
        <Navigation />
        <header className="App-header">
          <h1>Pintereach</h1>
          <p>Easily organize research articles from the web</p>
          <Form onSubmit={this.register}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="sign-up-form email" placeholder="Email Address" value={this.state.registration.email} onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input type="text" name="username" id="sign-up-form username" placeholder="Username" value={this.state.registration.username} onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="sign-up-form password" placeholder="Password" value={this.state.registration.password} onChange={this.handleChange} />
            </FormGroup>

            <Button>
              {this.global.isRegistered ? (
                <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
              ) : (
                  'Sign Up'
                )}
            </Button>

          </Form>
          <p>Already a member? <Link to="/login">Log In</Link></p>
        </header>
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    isRegistered: state.isRegistered
  };
};

export default Register
// export default connect(
//   mapStateToProps,
//   { register }
// )(Register);
