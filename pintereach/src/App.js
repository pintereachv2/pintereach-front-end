import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import Register from './components/Register';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Register}/>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/home" component={Home} />
        </div>
      </Router>
    );
  }
}
export default App;
