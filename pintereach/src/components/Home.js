import React, { setGlobal } from 'reactn';
import axios from 'axios'
import Loader from 'react-loader-spinner';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { withRouter } from 'react-router';


import HomeNavigation from './HomeNavigation';
import Tabs from './Tabs';


import '../App.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <HomeNavigation />
        <Tabs />
      </div>
    );
  }
}

Home = withRouter(Home);
export default Home;