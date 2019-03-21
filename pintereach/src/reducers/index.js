// // import { combineReducers } from 'redux';
// // import { loginReducer } from './loginReducer';
// // import { registerReducer } from './registerReducer';
// // // import { articleReducer } from './articleReducer';
// // // import { singleArticleReducer } from './singleArticleReducer';

// // export default combineReducers({
// //   loginReducer,
// //   registerReducer,
// //   // articleReducer,
// //   // singleArticleReducer
// // });

// import { LOGIN_START } from '../actions';
// import { REGISTER_START } from '../actions';

// const initialState = {
//   articles: [],
//   isLoggingIn: false,
//   isRegistered: false,
//   // gettingArticles: false,
//   // updatingArticles: false,
//   // creatingArticles: false,
//   // deletingArticles: false,
//   error: null
// }

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case LOGIN_START:
//       return { ...state, isLoggingIn: true }
//     case REGISTER_START:
//       return { ...state, isRegistered: true }
//     // case GETTING_ARTICLES:
//     //   return { ...state, gettingArticles: true };
//     // case GET_ARTICLES:
//     //   return { ...state, articles: action.payload, gettingArticles: false };
//     // case UPDATING_ARTICLES:
//     //   return { ...state, updatingArticles: true };
//     // case UPDATE_ARTICLES:
//     //   return { ...state, articles: action.payload, updatingArticles: false };
//     // case DELETING_ARTICLES:
//     //   return { ...state, deletingArticles: true };
//     // case DELETE_ARTICLES:
//     //   return { ...state, articles: action.payload, deletingArticles: false };
//     // case CREATING_ARTICLES:
//     //   return { ...state, creatingArticles: true };
//     // case CREATE_ARTICLES:
//     //   return { ...state, articles: action.payload, creatingArticles: false };
//     // case ERROR:
//     //   return {
//     //     ...state,
//     //     gettingArticles: false,
//     //     creatingArticles: false,
//     //     deletingArticles: false,
//     //     updatingArticles: false,
//     //     error: action.payload
//     //   };
//     default:
//       return state;
//   }
// }

// export default reducer;