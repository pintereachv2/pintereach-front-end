import React, { setGlobal } from 'reactn';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import { Button, Form, Label, Input } from 'reactstrap';
import { withRouter } from 'react-router';

import Navigation from './Navigation';

import '../App.css';
// const URL = 'localhost:4000' //env[process.env.environment].url
class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    // const URL = 'http://localhost:4000' //env[process.env.environment].url
    const creds = this.state.credentials
    
    axios.post(`https://pintereacher.herokuapp.com/api/login`, creds)
      .then(res => {
        setGlobal({isLoggingIn:true})
        const AUTH_TOKEN = res.data.token
        const userId = res.data.id

        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

        localStorage.setItem("jwt", AUTH_TOKEN);

        setGlobal({
          userId
        })
        // console.log(this.global)
        this.props.history.push('/home')
      }).catch(err => console.log(err));
    // console.log(this.state.credentials);
  };



  render() {
    return (
      <div>
        <Navigation isLoggingIonSignIn />
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

Login = withRouter(Login);
export default Login;
