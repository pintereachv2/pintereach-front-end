import React from 'reactn';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown
} from 'reactstrap';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'
import '../App';

export default class HomeNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
        <img src={require("../images/logo_transparent.png")} alt="logo" className="img-responsive" />
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem >
                <Link className='nav-text' to="/home" >Articles</Link>
              </NavItem>
              <NavItem className='nav-text'>
                <Link className='nav-text' to="/add" >Add New Article</Link>
              </NavItem>
              <NavItem >
                <Link className='nav-text' to="/login" >Log Out</Link>
              </NavItem >
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

HomeNavigation = withRouter(HomeNavigation);