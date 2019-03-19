import React, { setGlobal } from 'reactn';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import reducer from './reducers'
require('dotenv').config();


// const store = createStore(reducer, applyMiddleware(thunk));
setGlobal({
    login: {
        error: '',
        isRegistered: false,
        isLoggingIn: false
    }
})

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);

