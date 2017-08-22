import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import SerialForm from '../components/serial_form.jsx'

var maxStation = 10;
//import { DefaultPlayer as Video } from 'react-html5video';

import {Grid, Row, Col }  from 'react-bootstrap';

let OPTIONS = { prefix: 'seconds elapsed!', delay: 100};
export default class Videotest extends React.Component {


   render() {
      return (
        <div>
          <h1>Setup</h1>
          <SerialForm
            formName="serialcheck_videotest"
            />
        </div>

      );
   }
}
