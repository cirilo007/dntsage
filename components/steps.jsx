import React from 'react';
import ReactDOM from 'react-dom';
import Switch from 'react-bootstrap-switch';
import ButtonStep from '../components/button_step.jsx';
import ButtonSwitch from '../components/button_switch.jsx';
import Modal from 'react-modal'

export default class Steps extends React.Component {

  constructor(props) {
         super(props);
         this.state = ({
           modalopen: false
         })
         this.validateTest = this.validateTest.bind(this)
         this.closeModal = this.closeModal.bind(this)
     }

     validateTest(){
       var url = 'http://192.168.1.107/api/validateTest';
       fetch(url)
       .then(res=>res.text())
       .then(result=>{
         this.setState({modalopen: true})
       })

     }
     closeModal() {
         this.setState({
           modalopen: false
         });
       }

  render() {
    var that = this
     var content = Object.keys(that.props.steps).map(function(key) {
     return <ButtonStep key={key} stepkey={key} title={that.props.steps[key][1]} isactive={that.props.steps[key]["step_status"]} />
    });
    return (
      <div className="steps">
        {content}
        <button className="btn btn-sm btn-danger" onClick={this.validateTest}>
          Validar
        </button>
        <div className="pull-right">
          <ButtonSwitch />
        </div>
        <Modal
          isOpen={this.state.modalopen}
          contentLabel="Video Modal"
        >
        <button className="close_modal" onClick={this.closeModal}>Close</button>
        <div className="text-center">
          Test Completed !
        </div>
      </Modal>


      </div>
    );
  }
};
