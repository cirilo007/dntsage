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
         this.closeModal = this.closeModal.bind(this)
     }



     validateStep(){
       var url = 'http://'+ constants.LOCAL_SERVER +'/validateStep/';
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

    return (
      <div className="steps">
        <br/>
        {content}


        <div className="pull-right">
          <ButtonSwitch />
          <button className="btn btn-md btn-warning pull-right" onClick={this.validateStep}>
            Validar Etapa >>
          </button>

        </div>
      </div>
    );
  }
};
