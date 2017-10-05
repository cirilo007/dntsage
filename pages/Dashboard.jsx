import React from 'react';
import ReactDOM from 'react-dom';
import Overview from '../components/overview.jsx'

import * as constants from '../constants/AppConstants.js';

export default class Dashboard extends React.Component {

  constructor() {
        super();
        this.state = {
          overview : []
        }

        this.getOverview = this.getOverview.bind(this);
    }

    componentDidMount(){
      this.getOverview();
    }

  getOverview(){
    var that = this;
    var url = 'http://'+ constants.LOCAL_SERVER +'/overview/';

    return fetch(url)
    .then((result) => {
      return result.json();
    }).
    then((items) => {
        that.setState({
          overview: items
        });
      }
    )
  }


  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Overview items={this.state.overview} />
      </div>
    )
  }
}
