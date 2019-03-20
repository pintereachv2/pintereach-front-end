import React, { setGlobal } from 'reactn';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { withRouter } from 'react-router';
import ArticleForm from '../components/ArticleForm'
import { createArticle } from '../actions'
import axios from 'axios';

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
        return(<ArticleForm doOnSubmit={this.addArticles}></ArticleForm>)
        
    }
}

AddArticleView = withRouter(AddArticleView)
export default AddArticleView;