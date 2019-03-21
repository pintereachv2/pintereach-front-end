import React, { setGlobal } from 'reactn';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { withRouter } from 'react-router';
import axios from 'axios';

import { deleteArticle, editArticle } from '../actions'
import Cards from './Cards';
let URL = 'https://pintereacher.herokuapp.com/'
class Tabs extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            selectedTab: 'all',
            activeTab: '1'
        };
    }

    componentDidMount() {
        const token = window.localStorage.getItem('jwt')
        const options = {
            headers: {
                Authentication: token
            },
        };
        axios.get('https://pintereacher.herokuapp.com/api/articles/')
            .then((res) => {
                console.log(res)
                this.setState({ articles: res.data })
                return res.data
            })

            .then(articles => ({ articles }))

            .catch(err => ({ error: err }))

        setGlobal(
            axios.get('https://pintereacher.herokuapp.com/api/articles/', options)
                .then((res) => {
                    console.log(res)
                    return res.data
                })

                .then(articles => ({ articles }))

                .catch(err => ({ error: err }))

        );
        console.log(this.global.articles);
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    // filterCards = () => {
    //     if(this.state.activeTab === 'all') {
    //        return this.state.articles      
    //     } else {
    //       const newArray = []
    //       this.state.articles.filter((article) => {
    //         if(article.category==this.state.selectedTab){
    //           newArray.push(article);
    //         } 
    //       });
    //       return newArray;
    //     }
    //   };



    render() {
        console.log(this.state.articles);
        console.log(this.global.articles);
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            All
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            Tech
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}
                        >
                            Business
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent>
                    {this.global.articles.map((article, i) => (
                        <div>
                        <a href={article.content}>
                        <Card
                            key={article.id}
                            title={article.title}
                            content={article.content}
                            abstract={article.abstract}
                            category={article.category}
                        >
                            <CardTitle>{article.title}</CardTitle>
                            {/* <CardSubtitle>article.category</CardSubtitle> */}
                            <CardText>{article.abstract}</CardText>
                        </Card></a>
                            <Button href='/edit-article'>Edit</Button>
                            <Button onClick={e=>{
                                e.preventDefault()
                                deleteArticle(article.id)
                            }}>Delete</Button>
                        </div>
                    ))}
                </TabContent>
            </div>
        );
    }
}


Tabs = withRouter(Tabs);
export default Tabs;