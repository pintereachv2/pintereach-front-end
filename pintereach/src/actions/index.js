import axios from "axios";
import { getGlobal, setGlobal } from 'reactn'

const URL = 'https://pintereacher.herokuapp.com/api';

export const getArticles = () => {
    setGlobal(
        axios.get('https://pintereacher.herokuapp.com/api/articles/')
            .then((res) => {
                return res.data
            })
            .then(articles => ({ articles }))
            .catch(err => ({ error: err }))
    );
}

export const createArticle = article => {
    // console.log(article)
    axios.post(`${URL}/articles`, article).then(status => {
        // console.log(status)
        return status
    });
};

export const deleteArticle = id => {
    axios.delete(`${URL}/articles/${id}`).then(status => {
        const oldArticles = getGlobal().articles
        const newArticles = oldArticles.filter(article => article.id !== id)
        // console.log(status)
        setGlobal({
            articles: newArticles
        })
        return status
    })
};

export const editArticle = article => {
    const id = article.id
    console.log(article)
    axios.put(`${URL}/articles/${id}`, article).then(status => {
        // console.log(status)
        return status
    });
};

// export const updateSingleArticle = article => {
//   return {
//     type: SINGLE_ARTICLE,
//     payload: article
//   };
// };