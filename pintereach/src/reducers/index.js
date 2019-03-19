// import { combineReducers } from 'redux';
// import { loginReducer } from './loginReducer';
// import { registerReducer } from './registerReducer';
// // import { articleReducer } from './articleReducer';
// // import { singleArticleReducer } from './singleArticleReducer';

// export default combineReducers({
//   loginReducer,
//   registerReducer,
//   // articleReducer,
//   // singleArticleReducer
// });

import { LOGIN_START } from '../actions';
import { REGISTER_START } from '../actions';

const initialState = {
  articles: [],
  isLoggingIn: false,
  isRegistered: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return { ...state, isLoggingIn: true }
    case REGISTER_START:
      return { ...state, isRegistered: true }
    default:
      return state;
  }
}

export default reducer;