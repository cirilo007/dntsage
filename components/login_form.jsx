import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem}  from 'react-bootstrap';
import { render } from 'react-dom';

export default class LoginForm extends React.Component {
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
      alert(this.state.username)

    }

    componentDidMount(e){
    }


  login() {
    return (
      <div className="container">
        <div className="card card-container">
            <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
            <p id="profile-name" className="profile-name-card"></p>
            <form className="form-signin" onSubmit={this.handleSubmit}>
                <span id="reauth-email" className="reauth-email"></span>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus onChange={this.handleChange} />
                <input type="password" id="inputPassword" className="form-control" placeholder="Password"  />
                <div id="remember" className="checkbox">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
            </form>
            <a href="#" className="forgot-password">
                Forgot the password?
            </a>
        </div>
    </div>
    );
  }
  render(){
    if(this.state.username == ""){
      return (
        <div>
          {this.login()}
        </div>
      )
    } else {
      return null ;
    }

  }
}
