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
                    <Timer options={OPTIONS} />
                  </ Col>
                </ Row>
              </ Grid>

              <Grid fluid >

                <Row>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="1"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="2"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="3"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="4"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="5"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="6"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="7"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="8"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="9"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="10"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="11"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="12"
                      />
                  </ Col>

                </Row>
                <Row>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="1"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="2"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="1"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="2"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="1"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="2"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="1"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="2"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="1"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="2"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="1"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="2"
                      />
                  </ Col>

                </Row>
                <Row>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="1"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="2"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="1"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="2"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="1"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="2"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="1"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="2"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="1"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="2"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="1"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="2"
                      />
                  </ Col>

                </Row>
                <Row>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="1"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="2"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="1"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="2"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="1"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="2"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="1"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="2"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="1"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="2"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="1"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="2"
                      />
                  </ Col>

                </Row>
                <Row>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="1"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="2"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="1"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="2"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="1"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="2"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="1"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="2"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="1"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="2"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="1"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="2"
                      />
                  </ Col>

                </Row>
              </Grid>
            </div>
       </div>
      );
   }
}





export default App;
