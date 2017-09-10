import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import SerialForm from '../components/serial_form.jsx';
import ListItemsVideoTest from '../components/list_items_videotest.jsx';
import ButtonSwitch from '../components/button_switch.jsx';
import ButtonAction from '../components/button_action.jsx';
import Steps from '../components/steps.jsx';

import * as constants from '../constants/AppConstants';

import {Grid, Row, Col }  from 'react-bootstrap';

let OPTIONS = { prefix: 'seconds elapsed!', delay: 100};
export default class Videotest extends React.Component {

  constructor(props) {
         super(props);
         this.state = {
           testMax: "20",
           remaining: "0",
           loading:false,
           serials: [],
           steps: [],
           active_step: "0"
         };
         this.getSerials = this.getSerials.bind(this);
         this.getSteps = this.getSteps.bind(this);
     }
      getSerials(){
        var that = this;
        var url = 'http://'+ constants.LOCAL_SERVER +'/api/serials-active/';

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
      getSteps(){
        var that = this;
        var url = 'http://'+ constants.LOCAL_SERVER +'/api/steps/';

        return fetch(url)
        .then((result) => {
          return result.json();
        }).
        then((items) => {
            that.setState({
              steps: items
            });
          }
        )
      }

      getActiveStep(){
        var that = this;
        var url = 'http://'+ constants.LOCAL_SERVER +'/api/getActiveStep/';

        return fetch(url)
        .then((result) => {
          return result.json();
        }).
        then((items) => {
            that.setState({
              active_step: items
            });
            console.log(items)
          }
        )
      }


     componentDidMount() {
       this.getSerials();
       this.getSteps();
       this.getActiveStep();
       this.interval = setInterval(
         this.getSerials,2000);
     }

     componentWillUnmount() {
       clearInterval(this.interval);
     }

  render() {
      return (
        <div className="container-fluid">
          <Steps steps={this.state.steps} />
          <br />
          {this.state.remaining > 0 ?
            <div>
              {this.state.active_step[0] ?
                <div>
                  {this.state.active_step[0]['id_step'] == 1 ?
                    <SerialForm formName="serialcheck_videotest" remaining={this.state.remaining} />
                  : null}
                </div>
                : null}
            </div>
           : null}
          <ListItemsVideoTest serials={this.state.serials} loading={this.state.loading} />
        </div>

      );
   }
}
