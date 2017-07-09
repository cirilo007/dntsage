import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem}  from 'react-bootstrap';
import { Link } from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
      <div>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">DNT</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
          <NavItem href="/#/dashboard">Dashboard</NavItem>
          <NavItem href="/#/reception">Reception</NavItem>
          <NavItem href="/#/videotest">Video Test</NavItem>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
