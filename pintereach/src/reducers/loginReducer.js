import * as actionTypes from '../actions';
  
const initialState = {
    error: '',
    isLoggingIn: false
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_START: 
            return { ...state, isLoggingIn: true };
        default:
            return state;
    }
};
  