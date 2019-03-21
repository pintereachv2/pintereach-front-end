import axios from "axios";
import { getGlobal, setGlobal } from 'reactn'

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