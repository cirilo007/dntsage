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
                    <VideotestSetup />
                  </div>

      return (
          <div className="wrapper">
            {content}
          </div>

      );
   }

   onClick(item,e){

     console.log(e);
     item.preventDefault();
   }

}
