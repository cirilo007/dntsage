import React from 'react';
import ReactDOM from 'react-dom'
import Header from './components/header.js';
import Footer from './components/footer.js';
import Timer from 'react-timer';
//import { DefaultPlayer as Video } from 'react-html5video';

import {Grid, Row, Col }  from 'react-bootstrap';

let OPTIONS = { prefix: 'seconds elapsed!', delay: 100};


class App extends React.Component {
   render() {
      return (
        <div>
            <Header />
              <Grid fluid >
                <Row className="show-grid ">
                  <Col sm={6}>
                      <h1>Sagemcom Refurbish Management System Beta</h1>
                  </Col>
                  <Col sm={6}>
                    <small> <Timer options={OPTIONS} /></small>
                  </Col>

                </Row>
              </Grid>
            <div>
              <Grid fluid >
                <Row className="show-grid ">
                  <Col sm={1}>
                  </Col>
                  <Col sm={2}>
                    <h3>10.0.0.7 - Rpi2</h3>
                      <video controls autoPlay loop>
                          <source src="http://10.0.0.8:8080/stream" type="video/ogg" />
                      </video>
                  </Col>

                  <Col sm={2}>
                    <h3>10.0.0.8 - Rpi2</h3>
                      <video controls autoPlay loop>
                          <source src="http://10.0.0.8:8080/stream" type="video/ogg" />
                      </video>
                  </Col>
                  <Col sm={2}>
                    <h3>10.0.0.7 - Rpi2</h3>
                      <video controls autoPlay loop>
                          <source src="http://10.0.0.8:8080/stream" type="video/ogg" />
                      </video>
                  </Col>

                  <Col sm={2}>
                    <h3>10.0.0.8 - Rpi2</h3>
                      <video controls autoPlay loop>
                          <source src="http://10.0.0.8:8080/stream" type="video/ogg" />
                      </video>
                  </Col>
                  <Col sm={2}>
                    <h3>10.0.0.8 - Rpi2</h3>
                      <video controls autoPlay loop>
                          <source src="http://10.0.0.8:8080/stream" type="video/ogg" />
                      </video>
                  </Col>
                </Row>
                <Row className="show-grid ">
                  <Col sm={1}>
                  </Col>
                  <Col sm={2}>
                    <h3>10.0.0.7 - Rpi2</h3>
                      <video controls autoPlay loop>
                          <source src="http://10.0.0.7:8080/stream" type="video/ogg" />
                      </video>
                  </Col>

                  <Col sm={2}>
                    <h3>10.0.0.8 - Rpi2</h3>
                      <video controls autoPlay loop>
                          <source src="http://10.0.0.7:8080/stream" type="video/ogg" />
                      </video>
                  </Col>
                  <Col sm={2}>
                    <h3>10.0.0.7 - Rpi2</h3>
                      <video controls autoPlay loop>
                          <source src="http://10.0.0.7:8080/stream" type="video/ogg" />
                      </video>
                  </Col>

                  <Col sm={2}>
                    <h3>10.0.0.8 - Rpi2</h3>
                      <video controls autoPlay loop>
                          <source src="http://10.0.0.7:8080/stream" type="video/ogg" />
                      </video>
                  </Col>
                  <Col sm={2}>
                    <h3>10.0.0.8 - Rpi2</h3>
                      <video controls autoPlay loop>
                          <source src="http://10.0.0.7:8080/stream" type="video/ogg" />
                      </video>
                  </Col>
                </Row>
              </Grid>
            </div>
            <Footer />
       </div>
      );
   }
}





export default App;
