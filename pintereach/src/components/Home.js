import React from 'reactn';
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