import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import ImageReload from '../components/image_reload.js';
import ButtonReset from '../components/button_factory_reset.jsx';
import Timer from 'react-timer';



//import { DefaultPlayer as Video } from 'react-html5video';

import {Grid, Row, Col }  from 'react-bootstrap';

let OPTIONS = { prefix: 'seconds elapsed!', delay: 100};


export default class Videotest extends React.Component {
   render() {
      return (
        <div>
            <div>
              <Grid fluid >
                <Row>
                  <Col sm={4}>
                    <img src="/img/logo.png" />
                  </ Col>
                  <Col sm={4}>
                    <ButtonReset />

                  </ Col>
                  <Col sm={4}>
                    <Grid>
                      <Row>
                        <Col sm={6}>
                          <Timer options={OPTIONS} />
                        </Col>
                        <Col sm={6}>

                        </Col>
                      </Row>
                    </Grid>

                  </ Col>
                </ Row>
              </ Grid>

              <Grid fluid >

                <Row>
                  <Col sm={1}>
                    </ Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="1"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://10.0.0.8/img/home2.jpg"
                      name="2"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://10.0.0.8/img/home3.jpg"
                      name="3"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://10.0.0.8/img/home4.jpg"
                      name="4"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://10.0.0.8/img/home5.jpg"
                      name="5"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                  <Col sm={1}>
                    </ Col>
                </ Row>
                <Row>
                  <Col sm={1}>
                    </ Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://10.0.0.11/img/home.jpg"
                      name="6"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://10.0.0.11/img/home2.jpg"
                      name="7"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://10.0.0.11/img/home3.jpg"
                      name="8"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://10.0.0.11/img/home4.jpg"
                      name="9"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://10.0.0.11/img/home5.jpg"
                      name="10"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                  <Col sm={1}>
                    </ Col>

                </Row>

              </Grid>
            </div>
       </div>
      );
   }
}
