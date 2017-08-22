import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import VideotestSetup from '../pages/videotestsetup.jsx';
import Videotester from '../pages/videotester.jsx';

//import { DefaultPlayer as Video } from 'react-html5video';

import {Grid, Row, Col }  from 'react-bootstrap';

let OPTIONS = { prefix: 'seconds elapsed!', delay: 100};



export default class Videotest extends React.Component {
  constructor(props) {
         super(props);

     }
  componentDidMount() {
  }

   render() {

     var content = <VideotestSetup />

      return (
          <div className="wrapper">
            <Grid fluid>
              <Row className="header">
                <Col sm={12}>
                  <a href="#" onClick={this.gotostep}>Step1</a> | <a href="#" onClick={this.gotostep}>Step2</a> | <a href="#" onClick={this.gotostep}>Step3</a>
                </Col>
                <Col sm={12}>
                  {content}
                </Col>
              </Row>
            </Grid>
          </div>

      );
   }

   gotostep(e){
     e.preventDefault();
     console.log("get to step:");
   }

}
