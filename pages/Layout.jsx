import React from 'react';
import ReactDOM from 'react-dom'
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import * as constants from '../constants/AppConstants';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      authenticated: localStorage.getItem('id_token') ? true : false,
      testping: false
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

  testPing(){
    var that = this;
    var url = 'http://'+ constants.LOCAL_SERVER +'/serials-active/';

    return fetch(url)
    .then((result) => {
      return result.json();
    }).
    then((items) => {
        this.setState({
          testping: true
        });
      }
    )
  }


  componentWillMount() {
      this.lock = new Auth0Lock('cDKdfTJDZgQCln872jVRFJ1aO5DPnL8n', 'dntdom.auth0.com');
    }

    componentDidMount(){
      this.testPing();
    }
   render() {
      return (
         <div>
           {this.state.testping ?
             <div>
               <Header lock={this.lock} />
                 { this.state.authenticated ?
                <div>
                  {this.props.children}
                </div>
                : (
                <div className="text-center">
                  <h3>Access denied <br/>Please login</h3>
                </div>
              )}
            </div>
             :
             <div>
               Connecting to server...
            </div>}

         </div>
      );
   }
}
