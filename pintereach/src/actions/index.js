import axios from "axios";
import { env } from '../environment';

export const LOGIN_START = "LOGIN_START";
export const REGISTER_START = "REGISTER_START";
// export const GETTING_ARTICLES = "GETTING_ARTICLES";
// export const GET_ARTICLES = "GET_ARTICLES";
// export const UPDATING_ARTICLES = "UPDATING_ARTICLES";
// export const UPDATE_ARTICLES = "UPDATE_ARTICLES";
// export const DELETING_ARTICLES = "DELETING_ARTICLES";
// export const DELETE_ARTICLES = "DELETE_ARTICLES";
// export const CREATING_ARTICLES = "CREATING_ARTICLES";
// export const CREATE_ARTICLES = "CREATE_ARTICLES";
// export const SINGLE_ARTICLE = 'SINGLE_ARTICLE';
// export const TOGGLE_UPDATE_ARTICLE = 'TOGGLE_UPDATE_ARTICLE';
// export const ERROR = 'ERROR';

// const URL = env[process.env.environment].url

export const login = creds => dispatch => {
    // console.log(URL);
  dispatch({ type: LOGIN_START });
  return axios.post("http://localhost:4000/api/login", creds)
  .then(res => {
    localStorage.setItem("jwt", res.data.token);
  });
};

export const register = creds => dispatch => {
    dispatch({ type: REGISTER_START });
    return axios.post("http://localhost:4000/api/register", creds)
    .then(res => {
      localStorage.setItem("jwt", res.data.token);
    });
  };

//   const URL = 'http://localhost:5000/api/friends';

// export const getArticle = () => {
//   const articles = axios.get(`${URL}/get`);
//   return dispatch => {
//     dispatch({ type: GETTING_ARTICLES });
//     articles
//       .then(response => {
//         dispatch({ type: GET_ARTICLES, payload: response.data });
//       })
//       .catch(err => {
//         dispatch({ type: ERROR, payload: err });
//       });
//   };
// };

// export const createArticle = article => {
//   const newArticle = axios.post(`${URL}/create`, article);
//   return dispatch => {
//     dispatch({ type: CREATING_ARTICLES });
//     newArticle
//       .then(({ data }) => {
//         dispatch({ type: CREATE_ARTICLES, payload: data });
//       })
//       .catch(err => {
//         dispatch({ type: ERROR, payload: err });
//       });
//   };
// };

// export const deleteArticle = id => {
//   const deletedArticle = axios.delete(`${URL}/delete`, {
//     data: { id }
//   });
//   return dispatch => {
//     dispatch({ type: DELETING_ARTICLES });
//     deletedArticle
//       .then(({ data }) => {
//         dispatch({ type: DELETE_ARTICLES, payload: data });
//         dispatch({ type: SINGLE_ARTICLE, payload: {} });
//       })
//       .catch(err => {
//         dispatch({ type: ERROR, payload: err });
//       });
//   };
// };

// export const toggleShowUpdate = () => {
//   return {
//     type: TOGGLE_UPDATE_ARTICLE
//   };
// };

// export const updateSingleArticle = article => {
//   return {
//     type: SINGLE_ARTICLE,
//     payload: article
//   };
// };