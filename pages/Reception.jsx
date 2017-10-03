import React from 'react';
import SerialForm from '../components/serial_form.jsx';
import ListItems from '../components/list_items.jsx';

import * as constants from '../constants/AppConstants.js';

var FETCH_TIMEOUT = 500;

export default class Reception extends React.Component {
  constructor() {
        super();
        this.state = {
          serials : [],
          loading: false
        }

        this.getSerials = this.getSerials.bind(this);
    }

    getSerials(){
      var that = this;
      var url = 'http://'+ constants.LOCAL_SERVER +'/api/serials/0';

      return fetch(url)
      .then((result) => {
        return result.json();
      }).
      then((items) => {
          this.setState({
            serials: items,
            loading: false
            });
        }
      )
    }

    componentDidMount() {
      this.getSerials();
      this.interval = setInterval(
        this.getSerials,10000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
    return (
    <div>
      <h1><img src="img/taoscanner.png" alt="scanner" height="40" /> Reception</h1>
      <SerialForm formName="serialcheck_reception" formInitialTitle="Ingresar producto" />
      <ListItems serials={this.state.serials} loading={this.state.loading}/>
    </div>
    )
  }
}
