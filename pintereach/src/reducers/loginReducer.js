import * as actionTypes from '../actions';
  
const initialState = {
    error: '',
    isRegistered: false,
    isLoggingIn: false
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_START: 
            return { ...state, isLoggingIn: true };
        case actionTypes.REGISTER_START:
            return { ...state, isRegistered: true };
        default:
            return state;
    }
};
  