import React, { Component } from 'reactn';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import Register from './components/Register';
import {
  AddArticleView,
  EditArticleView
} from './views'
// import AddArticleForm from './views/AddArticleForm';
// import EditArticle from './views/EditArticle';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Register}/>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/add" component={AddArticleView} />
          <PrivateRoute path="/:id/edit-article" component={EditArticleView} />
        </div>
      </Router>
    );
  }
}

export default App;
