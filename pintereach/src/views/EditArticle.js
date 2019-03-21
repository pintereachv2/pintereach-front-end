import React from 'reactn';
import { withRouter } from 'react-router';

import {editArticle} from '../actions/index';

class EditArticle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    editArticles = (article) => {
        console.log(article)
        // add article id to article object before passing it to editArticle
        
        editArticle(article)
    }
    render() {
        return(<div>Testing</div>)
    }
}

EditArticle = withRouter(EditArticle)
export default EditArticle;