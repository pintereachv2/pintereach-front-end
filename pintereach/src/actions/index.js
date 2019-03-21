import axios from "axios";
import { getGlobal, setGlobal } from 'reactn'
// import { env } from '../environment';

// export const LOGIN_START = "LOGIN_START";
// export const REGISTER_START = "REGISTER_START";
// // export const GETTING_ARTICLES = "GETTING_ARTICLES";
// // export const GET_ARTICLES = "GET_ARTICLES";
// // export const UPDATING_ARTICLES = "UPDATING_ARTICLES";
// // export const UPDATE_ARTICLES = "UPDATE_ARTICLES";
// // export const DELETING_ARTICLES = "DELETING_ARTICLES";
// // export const DELETE_ARTICLES = "DELETE_ARTICLES";
// // export const CREATING_ARTICLES = "CREATING_ARTICLES";
// // export const CREATE_ARTICLES = "CREATE_ARTICLES";
// // export const SINGLE_ARTICLE = 'SINGLE_ARTICLE';
// // export const TOGGLE_UPDATE_ARTICLE = 'TOGGLE_UPDATE_ARTICLE';
// // export const ERROR = 'ERROR';


// const URL = 'localhost:4000' //env[process.env.environment].url


// export const login = creds => dispatch => {
//     // console.log(URL);
//   dispatch({ type: LOGIN_START });
//   return axios.post("http://localhost:4000/api/login", creds)
//   .then(res => {
//     localStorage.setItem("jwt", res.data.token);
//   });
// };

// export const register = creds => dispatch => {
//     dispatch({ type: REGISTER_START });
//     return axios.post("http://localhost:4000/api/register", creds)
//     .then(res => {
//       localStorage.setItem("jwt", res.data.token);
//     });
//   };


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
const URL = 'https://pintereacher.herokuapp.com/api';

export const createArticle = article => {
    console.log(article)
  const newArticle = axios.post(`${URL}/articles`, article).then(status => {
      console.log(status)
      return status
  });
};

export const deleteArticle = id => {
  const deletedArticle = axios.delete(`${URL}/articles/${id}`).then(status => {
      const oldArticles = getGlobal().articles
      const newArticles = oldArticles.filter(article => article.id !== id)
    
    console.log(status)
    setGlobal({
        articles: newArticles
    })
    return status
  })
};

export const editArticle = article => {
    const id = article.id
    const editArticle = axios.put(`${URL}/articles/${id}`, article).then(status => {
        console.log(status)
        return status
    });
};

// export const updateSingleArticle = article => {
//   return {
//     type: SINGLE_ARTICLE,
//     payload: article
//   };
// };