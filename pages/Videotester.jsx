import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import ImageReload from '../components/image_reload.js';
import ButtonAction from '../components/button_action.jsx';
import ButtonSwitch from '../components/button_switch.jsx';
import Timer from 'react-timer';




//import { DefaultPlayer as Video } from 'react-html5video';

import {Grid, Row, Col }  from 'react-bootstrap';

let OPTIONS = { prefix: 'seconds elapsed!', delay: 100};



export default class Videotester extends React.Component {


   render() {
      return (
        <div className="wrapper">
              <Grid fluid>
                <Row className="header">
                  <Col sm={1}>
                  </Col>
                  <Col sm={5}>
                    <ButtonAction
                          name = "Portal upgrade"
                          script = "lirc_01.php"
                          ico = "cloud-download"
                    />

                  </ Col>
                  <Col sm={5} className="text-right">
                    <ButtonSwitch />
                  </Col>
                  <Col sm={1}>
                  </Col>
                </Row>
              </ Grid>

              <Grid fluid >
                <Row>
                  <Col sm={1}>
                    <h3>Pi-1</h3>
                  </Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://192.168.1.101/img/feed01.jpg"
                      name="1"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://192.168.1.101/img/feed02.jpg"
                      name="2"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://192.168.1.101/img/feed03.jpg"
                      name="3"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://192.168.1.101/img/feed04.jpg"
                      name="4"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://192.168.1.101/img/feed05.jpg"
                      name="5"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                </Row>
                <Row>
                  <Col sm={1}>
                    <h3>Pi-2</h3>
                  </Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://192.168.1.102/img/feed06.jpg"
                      name="6"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://192.168.1.102/img/feed07.jpg"
                      name="7"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://192.168.1.102/img/feed08.jpg"
                      name="8"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://192.168.1.102/img/feed09.jpg"
                      name="9"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://192.168.1.102/img/feed10.jpg"
                      name="10"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                </Row>
                <Row>
                  <Col sm={1}>
                    <h3>Pi-3</h3>
                  </Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://192.168.1.103/img/feed11.jpg"
                      name="11"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://192.168.1.103/img/feed12.jpg"
                      name="12"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://192.168.1.103/img/feed13.jpg"
                      name="13"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://192.168.1.103/img/feed14.jpg"
                      name="14"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://192.168.1.103/img/feed15.jpg"
                      name="15"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                </Row>
                <Row>
                  <Col sm={1}>
                    <h3>Pi-4</h3>
                  </Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://192.168.1.104/img/feed16.jpg"
                      name="16"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>

                  <Col sm={2}>
                    <ImageReload
                      url="http://192.168.1.104/img/feed17.jpg"
                      name="17"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://192.168.1.104/img/feed18.jpg"
                      name="18"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://192.168.1.104/img/feed19.jpg"
                      name="19"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://192.168.1.104/img/feed20.jpg"
                      name="20"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                  <Col sm={2}>
                  </Col>
                </ Row>
              </Grid>
       </div>
      );
   }
}
