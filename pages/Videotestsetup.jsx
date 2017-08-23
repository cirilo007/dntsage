import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import SerialForm from '../components/serial_form.jsx';
import ListItemsVideoTest from '../components/list_items_videotest.jsx';

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
        var url = 'http://192.168.1.107/api/serials/1';

        return fetch(url)
        .then((result) => {
          return result.json();
        }).
        then((items) => {
            this.setState({
              serials: items,
              loading: false,
              remaining: this.state.testMax - items.length
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

          <div className="pull-right">
            Remaining : {this.state.remaining}
          </div>
          <h1>Scan and Install {this.state.remaining} / {this.state.testMax} products</h1>
          <SerialForm formName="serialcheck_videotest" />
          <ListItemsVideoTest serials={this.state.serials} loading={this.state.loading} />
        </div>

      );
   }
}
