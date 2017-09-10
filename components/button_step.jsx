import React from 'react';
import ReactDOM from 'react-dom';
var FontAwesome = require('react-fontawesome');
import Modal from 'react-modal';
import * as contants from '../constants/AppConstants.js';

export default class ButtonStep extends React.Component {

  constructor(props) {
         super(props);
         this.state = ({
           isactive: this.props.isactive,
           modalopen: false,
           disabled:false
         });

         this.handleClick = this.handleClick.bind(this)
         this.openModal = this.openModal.bind(this)
         this.closeModal = this.closeModal.bind(this)

     }
  componentDidMount() {
    if(this.state.isactive == 1){
      this.setState({
        thisstyle:"fa fa-cog fa-spin fa-fw",
        buttonclass: "btn btn-sm btn-info",
        disabled:false,
        modalopen: true
      })
    }
    else if(this.state.isactive == 2){
        this.setState({
          thisstyle:"fa fa-check",
          buttonclass: "btn btn-sm btn-default",
          disabled:true
        })
    }
    else if(this.state.isactive == 0){
        this.setState({
          thisstyle:"fa fa-hourglass-start",
          buttonclass: "btn btn-sm btn-default",
          disabled:false
        })
    }
  }

  handleClick(){
    this.setState({
      isactive: !this.state.isactive,
      thisstyle: "fa fa-cog",
      buttonclass:"btn btn-sm btn-default"
    });
  }


  openModal() {

      this.setState({
        modalopen: true
      });

      this.openModal = this.openModal.bind(this);

      }
  closeModal() {
    this.setState({
      modalopen: false
    });
    }


  validate_step(){
    alert();
  }
  render() {

    var modalstyle={
      overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(0,0,0,.9)'
      },
      content : {
        position                   : 'absolute',
        top                        : '40px',
        left                       : '40px',
        right                      : '40px',
        bottom                     : '40px',
        border                     : 'none',
        background                 : 'none',
        overflow                   : 'auto',
        WebkitOverflowScrolling    : 'touch',
        borderRadius               : '4px',
        outline                    : 'none',
        padding                    : '20px'

      }
    }

    return (
            <span className="buttonstep_wrapper">
              <div className={this.state.buttonclass} disabled={this.state.disabled}>
                <FontAwesome
                  className={this.state.thisstyle}
                  name={this.props.title}
                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                /> <b>{this.props.stepkey}</b> - {this.props.title}
              </div>
              <Modal
                isOpen={this.state.modalopen}
                contentLabel="Video Modal"
                style={modalstyle}
              >
              <div className="text-center modal-step">
                <h1>Etapa {this.props.stepkey} - {this.props.title}</h1>
                <p>{this.props.comment}</p>
                <img src={"./img/" + this.props.stepimg} alt="" height="200"/>
                <br/><br/>
                <button className="btn btn-xl btn-success" onClick={this.closeModal}><i className="fa fa-play"></i> Empezar</button>
                <br/><br/>
              </div>
            </Modal>
            </span>

    );
  }
};
