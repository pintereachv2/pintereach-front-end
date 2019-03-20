import React, { setGlobal } from 'reactn';
import axios from 'axios'
import Loader from 'react-loader-spinner';
import { Button, Form, Label, Input } from 'reactstrap';
import { withRouter } from 'react-router'
// import { login } from '../actions';
import Navigation from './Navigation';

import '../App.css';
const URL = 'localhost:4000' //env[process.env.environment].url
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
    // this.props
    //   .login(this.state.credentials) // action creator called "login"
    //   .then(() => this.props.history.push('/'));

    console.log(this.state.credentials)
    const creds = this.state.credentials
    // setGlobal(axios.post(`${URL}/api/login`, creds)
    //   .then(res => {
    //     setGlobal({isLoggingIn: true})
    //     localStorage.setItem("jwt", res.data.token);
    //   }));

    const URL = 'http://localhost:4000' //env[process.env.environment].url
    axios.post(`${URL}/api/login`, creds)
      .then(res => {
        setGlobal({isLoggedIn:true})
        localStorage.setItem("jwt", res.data.token);
        this.props.history.push('/login')
      }).catch(err => console.log(err));


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


// const mapStateToProps = ({error, isLoggingIn}) => ({
//   error,
//   isLoggingIn
// });
Login = withRouter(Login)
export default Login

// export default connect(
//   mapStateToProps,
//   { login }
// )(Login);