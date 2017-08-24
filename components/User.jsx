import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem}  from 'react-bootstrap';
import { render } from 'react-dom';

export default class User extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      username : ""
     };
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event) {
      this.setState({username: event.target.value});

    }

    handleSubmit(event) {
      alert(event.target.value)

    }

    componentDidMount(e){
      if(this.state.username == ""){

      }
    }


  render() {
    return (
      <NavItem eventKey={1}><i className="fa fa-user"></i> {this.state.username}</NavItem>
    );
  }
}
