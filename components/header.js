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
      authenticated: false
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    this.props.lock.show((err, profile, token) => {
      if (err) {
        alert(err);
        return;
      }
      AuthActions.logUserIn(profile, token);
      this.setState({authenticated: true});
    });
  }

  logout() {
    AuthActions.logUserOut();
    this.setState({authenticated: false});
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
          <LinkContainer to="/recycle">
            <NavItem eventKey={1}><i className="fa fa-recycle"></i> Refurbish</NavItem>
          </LinkContainer>
          <LinkContainer to="/packaging">
            <NavItem eventKey={1}><i className="fa fa-cubes"></i> Packaging</NavItem>
          </LinkContainer>
        </Nav>

          { !this.state.authenticated ? (
            <Nav>
            <NavItem onClick={this.login}>Login</NavItem>
            </Nav>
        ) : (
            <Nav>
              <NavItem ><i className="fa fa-user"></i> Logged-in as </NavItem>
              <NavItem onClick={this.logout}>Logout</NavItem>
            </Nav>

          )}
        </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
