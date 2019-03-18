import {
    LOGIN_START,
    REGISTER_START
  } from '../actions';
  
  const initialState = {
    error: '',
    isRegistered: false,
    isLoggingIn: false
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_START: {
        return {
          ...state,
          isLoggingIn: true
        };
      }
      case REGISTER_START: {
        return {
          ...state,
          isRegistered: true
        };
      }
    }
  };
  
  export default reducer;