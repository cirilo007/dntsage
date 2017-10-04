import React from 'react';
import ReactDOM from 'react-dom';

import Loader from '../components/image_loader.jsx';
import Modal from 'react-modal'

import ButtonSwitch from '../components/button_switch.jsx';
import ListSymptoms from '../components/list_symptoms.jsx';

import * as constants from '../constants/AppConstants.js';


export default class FeedVideo extends React.Component {

  constructor(props) {
         super(props);
         this.state = {
           url: this.props.url,
           size: "0",
           color: "holder bg-black",
           bytes: "...",
           message: "Connecting...",
           showLoader: false,
           modalopen: false,
           feedimage: '/img/ajax-loader.gif',
           modaltitle: '',
           controls: '',
           symptoms:[]
         };
         this.tick = this.tick.bind(this);
         this.componentDidMount = this.componentDidMount.bind(this);
         this.openModal = this.openModal.bind(this);
         this.closeModal = this.closeModal.bind(this);
         this.mouseEnter = this.mouseEnter.bind(this);
         this.mouseExit = this.mouseExit.bind(this);
         this.getSymptoms = this.getSymptoms.bind(this);
     }
  componentDidMount() {
    this.interval = setInterval(
      this.tick,3000);
      this.getSymptoms();

  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getSymptoms(){
    var url = 'http://'+ constants.LOCAL_SERVER +'/symptoms/'+this.props.serial_id;

    return fetch(url)
    .then((result) => {
      return result.json();
    }).
    then((items) => {
        this.setState({
          symptoms: items
        });
        //console.log(items);
      }
    )
  }


  mouseEnter(){
  this.setState({ isMouseInside: true });

  }
  mouseExit(){
    this.setState({ isMouseInside: false });
    this.getSymptoms();
  }
  openModal() {
      var xhr = new XMLHttpRequest();
      var ipaddress = this.props.url.split("/");
      xhr.open('GET', "http://" + ipaddress[2] + "/action.php?action=stream&feed=" + ipaddress[4].slice(0, -4), true);
      xhr.send();
      this.setState({
        modalopen: true,
        modaltitle: 'Video '+ipaddress[4].slice(0, -4)
      });
      var self = this;
      setTimeout(function() {
            self.setState({feedimage: "http://" + ipaddress[2] + ":8080/?action=stream"});
        }, 3000);

      this.openModal = this.openModal.bind(this);

      }
  closeModal() {
      var xhr = new XMLHttpRequest();
      var ipaddress = this.props.url.split("/");
      xhr.open('GET', "http://" + ipaddress[2] + "/action.php?action=stop-stream", true);
      xhr.send();
      this.setState({
        modalopen: false,
        feedimage: '/img/ajax-loader.gif'
      });
    }
  render() {
    var imageid = "video_"+this.props.name;
    var ipaddress = this.props.url.split("/");

    var modalstyle={
      overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(0,0,0,0.90)'
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
      <div className="bg-black">
        <h5 onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseExit}>
          <span>{this.props.name}</span>
          {this.state.isMouseInside ?
            <div>
            <div className="col-sm-12">
              <b><i className="fa fa-warning"></i> Reportar error:</b>
              </div>
              <ListSymptoms symptoms={this.state.symptoms} serial={this.props.serial} serial_id={this.props.serial_id} />
            </div>
                                   : null}

        </h5>

        <small className="timer">
          <i className="fa fa-barcode"></i> {this.props.serial}
          <br />
          <i className="fa fa-feed"></i> {this.state.bytes} b

        </small>
        <div className="test_status">
           {this.props.teststatus == 1  ? <i className="fa fa-asterisk fa-2x text-danger"></i> : <i className="fa fa-2x fa-check-square-o text-success"></i>}
        </div>
        <div>
          <video width="320" height="240" controls>
            <source src="movie.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
          Your browser does not support the video tag.
          </video>

          <img src="img/no-connection.png" id={imageid} className="livefeed img-responsive" alt={this.state.bytes} onClick={this.openModal} />
        </div>
        <Modal
          onAfterOpen={this.getFeed}
          isOpen={this.state.modalopen}
          contentLabel="Video Modal"
          style={modalstyle}
        >
        <div className="text-center">
          <ButtonSwitch />
          <button className="close_modal" onClick={this.closeModal}>Close</button>
          <br />
          <h2>{this.state.modaltitle}</h2>
          <img src="img/monitor.png" className="monitor" width="800" height="300" />
          <img src={this.state.feedimage} alt="" className="monitor_image"/>
        </div>
      </Modal>

      </div>
    );
  }


};
