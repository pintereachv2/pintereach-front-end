import React, { Component, setGlobal } from 'reactn';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import Loader from 'react-loader-spinner';
import axios from 'axios'

import Navigation from './Navigation';
class Register extends Component {
  state = {
    registration: {
      email: '',
      username: '',
      password: ''
    }

  }

  handleChange = e => {
    this.setState({
      registration: {
        ...this.state.registration,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.registration);
  };

  register = e => {
    e.preventDefault();
    // const URL = 'http://localhost:4000' 
    let URL = 'https://pintereacher.herokuapp.com'
    const creds = this.state.registration
    axios.post(`${URL}/api/register`, creds)
      .then(res => {
        setGlobal({isRegistered:true})
        localStorage.setItem("jwt", res.data.token);
        this.props.history.push('/login')
      }).catch(err => console.log(err));
    console.log(this.state.registration);
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

Register = withRouter(Register)
export default Register
