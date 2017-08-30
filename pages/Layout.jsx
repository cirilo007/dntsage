import React from 'react';
import ReactDOM from 'react-dom'
import Header from '../components/header.js';
import Footer from '../components/footer.js';


export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      authenticated: localStorage.getItem('id_token') ? true : false,
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
      this.setState({
        authenticated: true,
      });
    });

  }

  logout() {
    AuthActions.logUserOut();
    this.setState({
      authenticated: false,
  });
  }


  componentWillMount() {
      this.lock = new Auth0Lock('cDKdfTJDZgQCln872jVRFJ1aO5DPnL8n', 'dntdom.auth0.com');
    }

   render() {
      return (
         <div>
           <Header lock={this.lock} />
             { this.state.authenticated ?
            <div>
              {this.props.children}
            </div>
            : (
            <div>
              Please login
            </div>
          )}
         </div>
      );
   }
}
