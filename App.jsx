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
                      name="1b"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="2b"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="3b"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="4b"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="5b"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="6b"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="7b"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="8b"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="9b"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="10b"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="11b"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="12b"
                      />
                  </ Col>

                </Row>
                <Row>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="1c"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="2c"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="3c"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="4c"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="5c"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="6c"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="7c"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="8c"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="9c"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="10c"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="11c"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="12c"
                      />
                  </ Col>

                </Row>
                <Row>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="1d"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="2d"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="3d"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="4d"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="5d"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="6d"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="7d"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="8d"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="9d"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="10d"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="11d"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="12d"
                      />
                  </ Col>

                </Row>
                <Row>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="1e"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="2e"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="3e"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="4e"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="5e"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="6e"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="7e"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="8e"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="9e"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="10e"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.7/img/home.jpg"
                      name="11e"
                      />
                  </ Col>
                  <Col sm={1}>
                    <ImageReload
                      url="http://10.0.0.8/img/home.jpg"
                      name="12e"
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
