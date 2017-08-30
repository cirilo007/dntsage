import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem}  from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import AuthActions from '../actions/AuthActions.js';
import AuthStore from '../stores/AuthStore.js';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      user:[]
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentWillMount(){
    this.setState({
      user: JSON.parse(localStorage.getItem('profile'))
    }) ;
  }

  login() {
    this.props.lock.show((err, profile, token) => {
      if (err) {
        alert(err);
        return;
      }
      AuthActions.logUserIn(profile, token);
      this.setState({
        authenticated: true,
        user: JSON.parse(localStorage.getItem('profile'))
      });
      window.location.reload();
    });

  }

  logout() {
    AuthActions.logUserOut();
    this.setState({authenticated: false});
    window.location.reload();
  }



  render() {
    return (
      <div>
      <Navbar collapseOnSelect fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#"><img src="img/logo2.png" alt="DNT" className="logo" /></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        { !this.state.authenticated && !localStorage.getItem('id_token') ? null :
        <Nav>
          <LinkContainer to="/dashboard">
            <NavItem eventKey={1}><i className="fa fa-dashboard"></i> Dashboard</NavItem>
          </LinkContainer>
          <LinkContainer to="/reception">
            <NavItem eventKey={1}><i className="fa fa-truck"></i> Reception</NavItem>
          </LinkContainer>
          <LinkContainer to="/videotest">
            <NavItem eventKey={1}><i className="fa fa-youtube-play"></i> Video test</NavItem>
          </LinkContainer>
          <LinkContainer to="/repairs">
            <NavItem eventKey={1}><i className="fa fa-microchip"></i> Repairs</NavItem>
          </LinkContainer>
          <LinkContainer to="/refurbish">
            <NavItem eventKey={1}><i className="fa fa-recycle"></i> Refurbish</NavItem>
          </LinkContainer>
          <LinkContainer to="/packaging">
            <NavItem eventKey={1}><i className="fa fa-cubes"></i> Packaging</NavItem>
          </LinkContainer>
        </Nav>
      }
        <div className="pull-right">
          { !this.state.authenticated && !localStorage.getItem('id_token') ?
             (
               <Nav>
               <NavItem onClick={this.login}>Login</NavItem>
               </Nav>
        ) : (
              <Nav>
                <NavItem ><i className="fa fa-user"></i> Logged-in as {this.state.user.name}</NavItem>
                <NavItem onClick={this.logout}>Logout</NavItem>
              </Nav>
          )}
          </div>
        </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
