import axios from "axios";
import { getGlobal, setGlobal } from 'reactn'

const URL = 'https://pintereacher.herokuapp.com/api';

const getArticleCategorys = (articles) => {
    // get global object
    // map for categorys 
    console.log(articles)

    const categorys = articles.map(a => a.category)
    // reduce removing duplicates
    const uniq = [...new Set(categorys)]; 
    console.log(uniq)
    return ['all', ...uniq]
}

export const getArticles = () => {
        axios.get('https://pintereacher.herokuapp.com/api/articles/')
        .then(res => {
            const articles = res.data
            const categorys = getArticleCategorys(articles)
            setGlobal({
                articles,
                tabCategorys: categorys
            })
            return res.data
        })
        .catch(err => console.log(err) )
    console.log(getGlobal())
}

export const createArticle = article => {
    // console.log(article)
    return axios.post(`${URL}/articles`, article).then(status => {
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
