import React from 'reactn';
import { withRouter } from 'react-router';

import {editArticle} from '../actions/index';
import ArticleForm from '../components/ArticleForm'
import HomeNavigation from '../components/HomeNavigation';

class EditArticle extends React.Component {
    constructor(props) {
        super(props);
        const articleId = parseInt(props.match.params.id, 10)
        const articleIndex = this.global.articles.findIndex((art, i) => {
            console.log('i', i, 'art.id', art.id, art)
            return art.id == articleId
        })
        this.state = { 
            article: this.global.articles[articleIndex],
            updating: false
        }
    }
    editArticle = (article) => {
        this.setState({updating:true})
        editArticle(article)
        this.props.history.push('/home')
    }
    render() {
        return(
            <div class="EditArticle">
                <HomeNavigation />
                <ArticleForm 
                    updating={this.state.updating} 
                    doOnSubmit={this.editArticle} 
                    article={this.state.article}
                    buttonText={'Edit Article'}
                    />
            </div>
        )
    }
}

EditArticle = withRouter(EditArticle)
export default EditArticle;