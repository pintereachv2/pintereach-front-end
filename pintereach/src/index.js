import React, { setGlobal } from 'reactn';
import ReactDOM from 'react-dom';


import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
// import reducer from './reducers'
require('dotenv').config();


// const store = createStore(reducer, applyMiddleware(thunk));
setGlobal({
    error: '',
    isRegistered: false,
    isLoggingIn: false
})
// login: {
// }

const rootElement = document.getElementById('root');
ReactDOM.render(
    <App />,
    rootElement
    );
    
    // <Provider store={store}>
    // </Provider>,
