import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem}  from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';

export default class Header extends React.Component {
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
        </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
