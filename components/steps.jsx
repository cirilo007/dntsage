import React from 'react';
import ReactDOM from 'react-dom';
import Switch from 'react-bootstrap-switch';
import ButtonStep from '../components/button_step.jsx';
import ButtonSwitch from '../components/button_switch.jsx';
import * as constants from '../constants/AppConstants.js';
import Modal from 'react-modal'

export default class Steps extends React.Component {

  constructor(props) {
         super(props);
         this.state = ({
           modalopen: false,
           serials2move: [],
           good: [],
           bad: []
         })
         this.validateTest = this.validateTest.bind(this)
         this.closeModal = this.closeModal.bind(this)
     }

     componentWillUnmount(){
       this.setState({
         modalopen: false,
         serials2move: [],
         good: [],
         bad: []
       })
     }

     validateTest(){
       var url = 'http://'+ constants.LOCAL_SERVER +'/api/validateTest';
       fetch(url)
       .then(res=>res.json())
       .then(result=>{
         this.setState({
           modalopen: true,
           serials2move: result,
           good: result.good,
           bad: result.bad
         })

         console.log(result.good);
       })

     }
     validateStep(){
       var url = 'http://'+ constants.LOCAL_SERVER +'/api/validateStep/';
       fetch(url)
       .then(res=>res.text())
       .then(window.location.reload())

     }
     closeModal() {
         this.setState({
           modalopen: false
         });
         window.location.reload();
       }

  render() {
    var that = this
     var content = Object.keys(that.props.steps).map(function(key) {
     return <ButtonStep
       key={key}
       stepkey={that.props.steps[key]["id_step"]}
       title={that.props.steps[key]['step_name']}
       isactive={that.props.steps[key]["step_status"]}
       comment={that.props.steps[key]['step_comment']}
       stepimg={that.props.steps[key]['step_img']}
       />
     });

     var serials_good = Object.keys(that.state.good).map(function(key) {
     return <li key={key} className="list-group-item">
       <span className="label label-success">{that.state.good[key][2]}</span>
       &nbsp;&nbsp;
       <span><i className="fa fa-barcode"></i> {that.state.good[key][1]}</span>
     </li>
     });

     var serials_bad = Object.keys(that.state.bad).map(function(key) {
     return <li key={key} className="list-group-item">
       <span className="label label-danger">{that.state.bad[key][2]}</span>
       &nbsp;&nbsp;
       <span><i className="fa fa-barcode"></i>  {that.state.bad[key][1]}</span>
     </li>

     });

    return (
      <div className="steps">

        {content}

        <button className="btn btn-md btn-danger pull-right" onClick={this.validateTest}>
          Terminar Prueba
        </button>
        <button className="btn btn-md btn-warning pull-right" onClick={this.validateStep}>
          Validar Etapa >>
        </button>
        <Modal
          isOpen={this.state.modalopen}
          contentLabel="Video Modal"
        >
          <h1>Mover Cajas</h1>
            <div className="text-success">
                <ul className="list-group">
                  <li className="list-group-item list-group-item-success"> <i className="fa fa-check fa-2x"></i> Cajas OK</li>
                  {serials_good}
                </ul>
           </div>
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


        <div className="pull-right">
        </div>
      </div>
    );
  }
};
