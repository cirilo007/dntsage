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
      user:[],
      visible: false
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this)
  }

  componentWillMount(){
    this.setState({
      user: JSON.parse(localStorage.getItem('profile'))
    }) ;
  }

  login() {
    this.props.lock.show((err, profile, token) => {
      if (err) {
        alert("error is : " + err);
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

  handleMouseOver() {
      	this.setState({ visible: ! this.state.visible });
      }

  render() {
    return (
      <div>
        <div className="bg-banner" onMouseOver={this.handleMouseOver}>
          <img src="img/sagemcom.png" height="30" />
          <div className="pull-right">
            <div className="login-info">
            { !this.state.authenticated && !localStorage.getItem('id_token') ?
               (
                 <a href="#" className="pull-right" onClick={this.login}>Login</a>
               ) : (
                 <div>
                  <a href="#" className="pull-right" onClick={this.logout}><i className="fa fa-sign-out"></i> Logout</a>
                  <a href="#" className="pull-right"><i className="fa fa-user"></i> {this.state.user.name}</a>
                  </div>
            )}
            </div>
          </div>
        </div>
        <div className={this.state.visible ? "menu_show" : "menu_hide"}>
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
                </Navbar.Collapse>
              </Navbar>
        </div>


      </div>
    );
  }
}
