import React, { setGlobal } from 'reactn';
import { TabContent, Nav, NavItem, NavLink, Button, Card, CardTitle, CardText, CardSubtitle } from 'reactstrap';
import classnames from 'classnames';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'
import axios from 'axios';
import '../App.css';

import { getArticles, deleteArticle, editArticle } from '../actions'

// let URL = 'https://pintereacher.herokuapp.com/'

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            selectedTab: 'all',
            activeTab: 'all',
            tabCategorys: ['all', 'science', 'biz']

        };
        console.log('getArticle', getArticles())
    }

     toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    filterCards = () => {
        if(this.state.activeTab === 'all') {
           return this.global.articles
        } else {
          const newArray = []
          this.global.articles.filter((article) => {
            if(article.category==this.state.activeTab){
              newArray.push(article);
            } 
          });
          return newArray;
        }
      };


    // first 
    // find unquie article categorys 
    // make tabs based on those categorys
    // then when a tab is selected. filter for that category
    //

    getArticleCategorys = () => {
    }
    // first 
    // find unquie article categorys 
    // make tabs based on those categorys
    // then when a tab is selected. filter for that category
    //


    render() {
        console.log(this.props.article);
        return (
            <div className="tabs">
                <Nav tabs>
                {this.global.tabCategorys.map((category, i) => {
                        return (
                            <NavItem
                            key={i}
                             className="tab-nav-item">
                                <NavLink
                                    className={classnames(this.state.activeTab === category ? 'active': '', category)}
                                    onClick={() => { this.toggle(category); }}
                                >
                                    {category}
                                </NavLink>
                            </NavItem>
                        )
                    })}
                </Nav>
                <TabContent className="cards-container">

                    {this.filterCards().map((article) => (
                        <PinCard 
                        key={article.id} 
                        article={article} />
                    ))}

                </TabContent>
            </div>
        );
    }
}

const PinCard = ({article}) => (
    <div className='article-card'>
                        
    <Card
        className='card-container'
        key={article.id}
        title={article.title}
        content={article.content}
        abstract={article.abstract}
        category={article.category}
    >
        <CardTitle className='card-title'>Title: {article.title}</CardTitle>
            <CardSubtitle>Url: 
                <a href={article.content} className='card-web-link'>
                {article.content}
                </a>
            </CardSubtitle>
        <CardText>Abstract: {article.abstract}</CardText>
        <div className="card-button-container">
            <Link to={`${article.id}/edit-article`}>
                <Button className='edit card-button'> Edit </Button>
            </Link>
            <Button className='delete card-button'
                onClick={e=>{
                e.preventDefault()
                deleteArticle(article.id)
            }}>Delete</Button>
        </div>
    </Card>
        
    </div>
)

Tabs = withRouter(Tabs);
export default Tabs;