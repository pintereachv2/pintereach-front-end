import React from 'reactn';
import { Route, Redirect, withRouter } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route 
        {...rest} 
        render={() => {
            if (localStorage.getItem('token')) {
                return <Component />
            } else {
                return <Redirect to='/login' />
            }
        }}
        />
    );
}

// const mapStateToProps = ({errorStatusCode}) => ({
//     errorStatusCode: state.errorStatusCode
//   });

export default PrivateRoute
//   export default withRouter(
//     connect(
//       mapStateToProps,
//       {}
//     )(PrivateRoute)
//   );

