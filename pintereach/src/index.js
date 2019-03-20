import React, { setGlobal } from 'reactn';
import ReactDOM from 'react-dom';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';

require('dotenv').config();

// axios.defaults.baseURL = 'localhost:4000';

setGlobal({
    error: '',
    isRegistered: false,
    isLoggingIn: false,
    gettingArticles: false,
    updatingArticles: false,
    creatingArticles: false,
    deletingArticles: false,
    articles: []
})

const rootElement = document.getElementById('root');
ReactDOM.render(
    <App />,
rootElement
);
