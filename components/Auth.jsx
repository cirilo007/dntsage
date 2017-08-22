import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'dntdom.auth0.com',
    clientID: 'qpYVCCnNsCwepUhKOoFV2KODeZa-DIE4',
    redirectUri: 'http://localhost:3000',
    audience: 'https://dntdom.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}
