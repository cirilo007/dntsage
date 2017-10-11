import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import SerialForm from '../components/serial_form.jsx';
import ListItemsVideoTest from '../components/list_items_videotest.jsx';
import ButtonSwitch from '../components/button_switch.jsx';
import ButtonAction from '../components/button_action.jsx';
import Modal from 'react-modal'

import * as constants from '../constants/AppConstants';

import {Grid, Row, Col }  from 'react-bootstrap';

let OPTIONS = { prefix: 'seconds elapsed!', delay: 100};
export default class Videotest extends React.Component {

  constructor(props) {
         super(props);
         this.state = {
           testMax: "20",
           remaining: "0",
           loading:false,
           serials: [],
           steps: [],
           active_step: "0",
           modalopen: false,
           serials2move: [],
           good: [],
           bad: []
         };
         this.getSerials = this.getSerials.bind(this);
         this.getSteps = this.getSteps.bind(this);
         this.validateTest = this.validateTest.bind(this);
         this.closeModal = this.closeModal.bind(this)
     }
      getSerials(){
        var that = this;
        var url = 'http://'+ constants.LOCAL_SERVER +'/serials-active/';

        return fetch(url)
        .then((result) => {
          return result.json();
        }).
        then((items) => {
            this.setState({
              serials: items,
              loading: false,
              remaining: items.length ? (this.state.testMax - items.length) : this.state.testMax
            });
          }
        )
      }
      getSteps(){
        var that = this;
        var url = 'http://'+ constants.LOCAL_SERVER +'/steps/';

        return fetch(url)
        .then((result) => {
          return result.json();
        }).
        then((items) => {
            that.setState({
              steps: items
            });
          }
        )
      }

      getActiveStep(){
        var that = this;
        var url = 'http://'+ constants.LOCAL_SERVER +'/getActiveStep/';

        return fetch(url)
        .then((result) => {
          return result.json();
        }).
        then((items) => {
            that.setState({
              active_step: items
            });
            //console.log(items)
          }
        )
      }


     componentDidMount() {
       this.getSerials();
       this.getSteps();
       this.getActiveStep();
       this.interval = setInterval(
         this.getSerials,2000);
     }

     componentWillUnmount() {
       clearInterval(this.interval);
       this.setState({
         modalopen: false,
         serials2move: [],
         good: [],
         bad: []
       })
     }


     validateTest(){
       var url = 'http://'+ constants.LOCAL_SERVER +'/validateTest';
       fetch(url)
       .then(res=>res.json())
       .then(result=>{
         this.setState({
           modalopen: true,
           serials2move: result,
           good: result.good,
           bad: result.bad
         })

       })

     }
     closeModal() {
         fetch('http://'+ constants.ACTION_SERVER +'/serial_write.php?tosend=on');
         this.setState({
           modalopen: false
         });

         window.location.reload();
       }

  render() {
    var that = this;
    var serials_good = Object.keys(that.state.good).map(function(key) {
    return <li key={key} className="list-group-item">
      <span className="label label-success">{that.state.good[key][2]}</span>
      &nbsp;&nbsp;
      <span><i className="fa fa-barcode"></i> {that.state.good[key][1]}</span>
    </li>
    });
    var arraytosend = "";
    var serials_bad = Object.keys(that.state.bad).map(function(key) {
    arraytosend += that.state.bad[key][2] + ",";

    return <li key={key} className="list-group-item">
      <span className="label label-danger">{that.state.bad[key][2]}</span>
      &nbsp;&nbsp;
      <span><i className="fa fa-barcode"></i>  {that.state.bad[key][1]}</span>
    </li>

    });
    fetch('http://'+ constants.ACTION_SERVER +'/serial_write.php?tosend='+ arraytosend + ';');


      return (
        <div className="container-fluid">
          {/*this.state.active_step[0] != null ? <Steps steps={this.state.steps} /> : null */}
          <br/>
          <div className="divbutton">



            <ButtonAction
              name= "1- firmware upgrade"
              ico= "recycle"
              script="lirc.php?script=firmware"
               />
            <ButtonAction
              name= "2- factory reset"
              ico= "recycle"
              script="lirc.php?script=factory"
               />
               <button className="btn btn-md btn-danger" onClick={this.validateTest}>
                  Terminar Prueba
                </button>
             <ButtonSwitch />




          </div>
          <br /><br />
          {this.state.remaining > 0 ?
            <div>
              <SerialForm formName="serialcheck_videotest" remaining={this.state.remaining} formInitialTitle="Anadir productos al banco de prueba" />
            </div>
           : null}
             <ListItemsVideoTest serials={this.state.serials} loading={this.state.loading} />
               <Modal
                 isOpen={this.state.modalopen}
                 contentLabel="Video Modal"
               >
                 <h1>Mover Cajas</h1>
                  <div className="text-danger">
                       <ul className="list-group">
                         <li className="list-group-item list-group-item-danger"><i className="fa fa-check fa-2x"></i> Cajas NOT OK</li>
                         {serials_bad}
                       </ul>
                   </div>
                   <div className="text-center">
                     <button className="btn btn-success btn-xl text-center" onClick={this.closeModal}><i className="fa fa-play"></i> Finalizar Prueba</button>
                   </div>


             </Modal>


        </div>

      );
   }
}
