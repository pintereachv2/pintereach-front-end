import React from 'reactn';
import { withRouter } from 'react-router';
import ArticleForm from '../components/ArticleForm'
import { createArticle } from '../actions'

import HomeNavigation from '../components/HomeNavigation';

class AddArticleView extends React.Component {
        constructor(props) {
        super(props);

        this.state = {

        };
    }
    addArticles = (article) => {
            console.log(article)
            createArticle(article)
        }

    render() {
        return(
            <div>
            <HomeNavigation/>
                <ArticleForm doOnSubmit={this.addArticles}></ArticleForm>
            </div>
        )
        
    }
}

AddArticleView = withRouter(AddArticleView)
export default AddArticleView;