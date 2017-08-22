import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import VideotestSetup from '../pages/Videotestsetup.jsx';
import Videotester from '../pages/Videotester.jsx';

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

     var content = <div>
                    <VideotestSetup /><Videotester />
                  </div>

      return (
          <div className="wrapper">
            <Grid fluid>
              <Row className="header">
                <Col sm={12}>
                  <a href="#" key="1" onClick={this.onClick}>Step1</a> | <a href="#" key="2" onClick={this.onClick}>Step2</a> | <a href="#" key="3" onClick={this.onClick}>Step3</a>
                </Col>
                <Col sm={12}>
                  {content}
                </Col>
              </Row>
            </Grid>
          </div>

      );
   }

   onClick(item,e){

     console.log(e);
     item.preventDefault();
   }

}
