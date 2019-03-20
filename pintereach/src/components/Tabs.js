import React, { setGlobal } from 'reactn';
import { TabContent, Nav, NavItem, NavLink } from 'reactstrap';
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
        axios.defaults.headers.common['Authorization'] = res.data.token;
        const token = window.localStorage.setItem(res.data.token)

        // const options = {
        // headers: {
        //   Authentication: token,
        //     },
        // };
        // console.log(options);
        setGlobal(
            axios.get('http://localhost:4000/api/articles')
                .then((res) => {
                    console.log(res)
                  return res.data
                })
                .then(articles => ({ articles }))
                .catch(err => ({ error: err }))
                
        );
        // console.log(this.global.articles);
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
                    {/* {this.global.articles.map(article => (
                        <Cards 
                        key={article.title} 
                        {...article}
                        />
                    ))} */}
                    
                </TabContent>
            </div>
        );
    }
}


Tabs = withRouter(Tabs);
export default Tabs;