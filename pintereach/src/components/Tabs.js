import React, { setGlobal } from 'reactn';
import { TabContent, Nav, NavItem, NavLink, Button, Card, CardTitle, CardText, CardSubtitle } from 'reactstrap';
import classnames from 'classnames';
import { withRouter } from 'react-router';
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
        getArticles()
    }

    componentDidMount() {
        // const token = window.localStorage.getItem('jwt')
        // const options = {
        //     headers: {
        //         Authentication: token
        //     },
        // };
        // setGlobal(
        //     axios.get('https://pintereacher.herokuapp.com/api/articles/', options)
        //         .then((res) => {
        //             return res.data
        //         })
        //         .then(articles => ({ articles }))
        //         .catch(err => ({ error: err }))
        // );
        // set unqie article categorys
        setInterval(this.getArticleCategorys, 1000)
        
        this.getArticleCategorys()

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

    getArticleCategorys = () => {
        // get global object
        // map for categorys 
        console.log(this.global.articles)
        const categorys = this.global.articles.map(a => a.category)
        console.log(categorys)
        // reduce removing duplicates
        const uniq = [...new Set(categorys)]; 
        console.log(uniq)
        setGlobal({
            tabCategorys: ['all', ...uniq]
        })
        this.setState({
            tabCategorys: ['all', ...uniq]
        })
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
                {this.state.tabCategorys.map((category, i) => {
                        return (
                            <NavItem className="tab-nav-item">
                                <NavLink
                                    className={classnames(this.state.activeTab === String(category) ? 'active': '', category)}
                                    onClick={() => { this.toggle(String(category)); }}
                                >
                                    {category}
                                </NavLink>
                            </NavItem>
                        )
                    })}
                </Nav>
                <TabContent>

                    {this.filterCards().map((article) => (
                        <div className='article-card'>
                        
                        <Card
                            key={article.id}
                            title={article.title}
                            content={article.content}
                            abstract={article.abstract}
                            category={article.category}
                        >
                            <CardTitle>{article.title}</CardTitle>
                            <a href={article.content}>
                                <CardSubtitle>{article.content}</CardSubtitle>
                            </a>
                            <CardText>{article.abstract}</CardText>
                            <Button onClick={()=>{
                                this.props.history.push(`${article.id}/edit-article`)
                            }}
                            > Edit </Button>
                            <Button onClick={e=>{
                                e.preventDefault()
                                deleteArticle(article.id)
                            }}>Delete</Button>
                        </Card>
                            
                        </div>
                    ))}

                </TabContent>
            </div>
        );
    }
}


Tabs = withRouter(Tabs);
export default Tabs;