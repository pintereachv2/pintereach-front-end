import React from 'reactn';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route 
        {...rest} 
        render={() => {
            if (localStorage.getItem('token')) {
                console.log('semi-working');
                return <Component />
            } else {
                console.log('not-working');
                return <Redirect to='/login' />
            }
        }}
        />
    );
}

const mapStateToProps = state => ({
    // errorStatusCode: state.errorStatusCode
  });
  
  export default withRouter(
    connect(
      mapStateToProps,
      {}
    )(PrivateRoute)
  );