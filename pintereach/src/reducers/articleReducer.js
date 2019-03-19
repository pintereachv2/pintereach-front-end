// import * as actionTypes from '../actions';

// const initialState = {
//   articles: [],
//   gettingArticles: false,
//   updatingArticles: false,
//   creatingArticles: false,
//   deletingArticles: false,
//   error: null
// };

// export const articleReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.GETTING_ARTICLES:
//       return { ...state, gettingArticles: true };
//     case actionTypes.GET_ARTICLES:
//       return { ...state, articles: action.payload, gettingArticles: false };
//     case actionTypes.UPDATING_ARTICLES:
//       return { ...state, updatingArticles: true };
//     case actionTypes.UPDATE_ARTICLES:
//       return { ...state, articles: action.payload, updatingArticles: false };
//     case actionTypes.DELETING_ARTICLES:
//       return { ...state, deletingArticles: true };
//     case actionTypes.DELETE_ARTICLES:
//       return { ...state, articles: action.payload, deletingArticles: false };
//     case actionTypes.CREATING_ARTICLES:
//       return { ...state, creatingArticles: true };
//     case actionTypes.CREATE_ARTICLES:
//       return { ...state, articles: action.payload, creatingArticles: false };
//     case actionTypes.ERROR:
//       return {
//         ...state,
//         gettingArticles: false,
//         creatingArticles: false,
//         deletingArticles: false,
//         updatingArticles: false,
//         error: action.payload
//       };
//     default:
//       return state;
//   }
// };

