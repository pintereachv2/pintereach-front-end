import React, { setGlobal } from 'reactn';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { withRouter } from 'react-router';
import axios from 'axios';

import Cards from './Cards';

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
        const options = {
            headers: {
              Authentication: localStorage.getItem('jwt')
            },
        };
        this.setGlobal(
            axios.get('https://pintereacher.herokuapp.com/api/articles/id', options)
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
                    {/* {this.global.articles.map((article, i) => (
                        <Cards 
                        key={i} 
                        title={article.title}
                        content={article.content}
                        abstract={article.abstract}
                        category={article.category}
                        />
                    ))} */}
                    
                </TabContent>
            </div>
        );
    }
}


Tabs = withRouter(Tabs);
export default Tabs;