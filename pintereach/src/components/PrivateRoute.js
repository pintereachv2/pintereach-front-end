import React from 'reactn';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route 
        {...rest} 
        render={() => {
            return localStorage.getItem('jwt') ? (
                <Component />
            ) : (
            <Redirect to='/login' />
            )    
        }}
        />
    );
}

export default PrivateRoute


