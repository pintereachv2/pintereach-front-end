import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import Navigation from './components/Navigation'

class App extends Component {
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
        ...this.registration,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <header className="App-header">
            <h1>Pintereach</h1>
            <p>Easily organize research articles from the web</p>
            <Form>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="sign-up-form" placeholder="Email Address" value={this.state.registration.email} onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input type="text" name="username" id="sign-up-form" placeholder="Username" value={this.state.registration.username} onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="sign-up-form" placeholder="Password" value={this.state.registration.password} onChange={this.handleChange} />
              </FormGroup>
              <Link><Button>Sign Up</Button></Link>
            </Form>
            <p>Already a member? <Link to="/login">Log In</Link></p>
          </header>
        </div>
        {/* <Route component={Login} /> */}
        {/* <PrivateRoute exact path="/register" component={Articles} /> */}
      </Router>
    );
  }
}

export default App;
