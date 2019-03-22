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
            this.props.history.push('/home')
        }

    render() {
        return(
            <div>
            <HomeNavigation/>
                <ArticleForm 
                    updating={false} 
                    doOnSubmit={this.addArticles}
                    buttonText={'Add Article'}
                    ></ArticleForm>
            </div>
        )
        
    }
}

AddArticleView = withRouter(AddArticleView)
export default AddArticleView;