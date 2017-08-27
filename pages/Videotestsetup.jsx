import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import SerialForm from '../components/serial_form.jsx';
import ListItemsVideoTest from '../components/list_items_videotest.jsx';
import ButtonSwitch from '../components/button_switch.jsx';
import ButtonAction from '../components/button_action.jsx';

//import { DefaultPlayer as Video } from 'react-html5video';

import {Grid, Row, Col }  from 'react-bootstrap';

let OPTIONS = { prefix: 'seconds elapsed!', delay: 100};
export default class Videotest extends React.Component {

  constructor(props) {
         super(props);
         this.state = {
           testMax: "20",
           remaining: "20",
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
        <div>
          {this.state.remaining > 0 ?
            <div>
              <h1>Scan and Install {this.state.remaining} / {this.state.testMax} products</h1>
              <SerialForm formName="serialcheck_videotest" />
            </div>
           : null}

          <div className="pull-right hdmiswitch">
            <ButtonSwitch />
              <ButtonAction
                    name = "Portal upgrade"
                    script = "lirc_01.php"
                    ico = "cloud-download"
              />
          </div>
          <ListItemsVideoTest serials={this.state.serials} loading={this.state.loading} />
        </div>

      );
   }
}
