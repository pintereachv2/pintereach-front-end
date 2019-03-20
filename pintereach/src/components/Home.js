import React, { setGlobal } from 'reactn';
import axios from 'axios'
import Loader from 'react-loader-spinner';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { withRouter } from 'react-router';
import classnames from 'classnames';

import Navigation from './Navigation';


import '../App.css';

class Home extends React.Component {
    constructor(props) {
    super(props);


    this.toggle = this.toggle.bind(this);
    this.state = {
        activeTab: '1'
    };
    }

    toggle(tab) {
    if (this.state.activeTab !== tab) {
        this.setState({
        activeTab: tab
        });
    }
    }

//   handleChange = e => {
//     this.setState({
//       credentials: {
//         ...this.state.credentials,
//         [e.target.name]: e.target.value
//       }
//     });
//   };

//   login = e => {
//     e.preventDefault();
//     const URL = 'http://localhost:4000' //env[process.env.environment].url
//     const creds = this.state.credentials
//     axios.post(`${URL}/api/login`, creds)
//       .then(res => {
//         setGlobal({isLoggingIn:true})
//         localStorage.setItem("jwt", res.data.token);
//         this.props.history.push('/')
//       }).catch(err => console.log(err));
//     console.log(this.state.credentials);
//   };
  // export const getArticle = () => {
//   const articles = axios.get(`${URL}/get`);
//   return dispatch => {
//     dispatch({ type: GETTING_ARTICLES });
//     articles
//       .then(response => {
//         dispatch({ type: GET_ARTICLES, payload: response.data });
//       })
//       .catch(err => {
//         dispatch({ type: ERROR, payload: err });
//       });
//   };
// };

  render() {
    return (
      <div>
        <Navigation />
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Tab1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Moar Tabs
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

Home = withRouter(Home);
export default Home;