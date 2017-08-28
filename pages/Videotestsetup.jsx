import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import SerialForm from '../components/serial_form.jsx';
import ListItemsVideoTest from '../components/list_items_videotest.jsx';
import ButtonSwitch from '../components/button_switch.jsx';
import ButtonAction from '../components/button_action.jsx';
import Steps from '../components/steps.jsx';
//import { DefaultPlayer as Video } from 'react-html5video';

import {Grid, Row, Col }  from 'react-bootstrap';

let OPTIONS = { prefix: 'seconds elapsed!', delay: 100};
export default class Videotest extends React.Component {

  constructor(props) {
         super(props);
         this.state = {
           testMax: "20",
           remaining: "0",
           loading:false,
           serials: []
         };
         this.getSerials = this.getSerials.bind(this);
     }
      getSerials(){
        var that = this;
        var url = 'http://192.168.1.107/api/serials-active/';

        return fetch(url)
        .then((result) => {
          return result.json();
        }).
        then((items) => {
            this.setState({
              serials: items,
              loading: false,
              remaining: items.length ? (this.state.testMax - items.length) : this.state.testMax
            });
          }
        )
      }

     componentDidMount() {
       this.getSerials();
       this.interval = setInterval(
         this.getSerials,2000);
     }

     componentWillUnmount() {
       clearInterval(this.interval);
     }

  render() {
      return (
        <div className="container-fluid">
          <Steps />
          <br />
          {this.state.remaining > 0 ?
            <div>
              <SerialForm formName="serialcheck_videotest" remaining={this.state.remaining} />
            </div>
           : null}
          <ListItemsVideoTest serials={this.state.serials} loading={this.state.loading} />
        </div>

      );
   }
}
