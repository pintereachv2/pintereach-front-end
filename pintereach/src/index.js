import React, { setGlobal } from 'reactn';
import ReactDOM from 'react-dom';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';

require('dotenv').config();

// axios.defaults.baseURL = 'localhost:4000';

// get auth header from localstorage and put it in axios headers
const AUTH_TOKEN = localStorage.getItem('jwt')
if (AUTH_TOKEN) {
    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
}

setGlobal({
    error: '',
    isRegistered: false,
    isLoggingIn: false,
    gettingArticles: true,
    updatingArticles: false,
    creatingArticles: false,
    deletingArticles: false,
    articles: [],
    tabCategorys: ['all'],
    activeTab: 'all'
})

const rootElement = document.getElementById('root');
ReactDOM.render(
    <App />,
rootElement
);
