import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import reducer from './reducers'
require('dotenv').config();


const store = createStore(reducer, applyMiddleware(thunk));

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);

