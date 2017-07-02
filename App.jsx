import React from 'react';
import ReactDOM from 'react-dom'
import Header from './components/header.js';
import Footer from './components/footer.js';
import ImageReload from './components/image_reload.js';
import Timer from 'react-timer';
//import { DefaultPlayer as Video } from 'react-html5video';

import {Grid, Row, Col }  from 'react-bootstrap';

let OPTIONS = { prefix: 'seconds elapsed!', delay: 100};


class App extends React.Component {
   render() {
      return (
        <div>
            <div>
              <Grid fluid >

                <Row>
                  <Col sm={6}>
                    <img src="/img/logo.png" />
                  </ Col>
                  <Col sm={6}>
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
                      url="http://10.0.0.9/img/home.jpg"
                      name="1"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://10.0.0.9/img/home.jpg"
                      name="2"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://10.0.0.9/img/home.jpg"
                      name="3"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://10.0.0.9/img/home.jpg"
                      name="4"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://10.0.0.9/img/home.jpg"
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
                      url="http://10.0.0.9/img/home2.jpg"
                      name="6"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://10.0.0.9/img/home2.jpg"
                      name="7"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://10.0.0.9/img/home2.jpg"
                      name="8"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://10.0.0.9/img/home2.jpg"
                      name="9"
                      resMax = "29000"
                      resMin="26600"
                      />
                  </ Col>
                  <Col sm={2}>
                    <ImageReload
                      url="http://10.0.0.9/img/home2.jpg"
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





export default App;
