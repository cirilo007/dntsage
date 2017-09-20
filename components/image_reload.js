import React from 'react';
import ReactDOM from 'react-dom';

import Loader from '../components/image_loader.jsx';
import Modal from 'react-modal'

import ButtonSwitch from '../components/button_switch.jsx';
import ListSymptoms from '../components/list_symptoms.jsx';

import * as constants from '../constants/AppConstants.js';


export default class ImageReload extends React.Component {

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
    var url = 'http://'+ constants.LOCAL_SERVER +'/api/symptoms/'+this.props.serial_id;

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

  tick(){
    var self = this;
    var xhr = new XMLHttpRequest();
    var imageid = "video_"+this.props.name;
    xhr.open('GET', this.props.url + "?time="+new Date().getTime(), true);
    xhr.timeout = 1500,
    xhr.responseType = 'arraybuffer';

    xhr.ontimeout = function(e) {
      self.setState({color: "holder bg-black" });
      self.setState({message: "Timeout, reconnecting..." });
      self.setState({bytes: "0" });
      document.getElementById(imageid).src="/img/ajax-loader.gif";

    }
    xhr.onload = function(e) {

      if (this.status === 200) {
        var uInt8Array = new Uint8Array(this.response);
        var i = uInt8Array.length;
        var binaryString = new Array(i);
        while (i--)
        {
          binaryString[i] = String.fromCharCode(uInt8Array[i]);
        }
        var data = binaryString.join('');

        var base64 = window.btoa(data);

        // get bytes and apply styles
        var bytes = xhr.getResponseHeader("content-length").toLowerCase();
        self.setState({bytes: bytes });
        self.setState({showLoader: true });
        if (bytes < 7000){

        }
        else if (bytes > 7000 && bytes < 12000) {
          self.setState({
          //  color: "holder bg-danger",
            message: "No signal from HDMI" }
          );
//            document.getElementById(imageid).src="/img/no-signal.jpg";
            document.getElementById(imageid).src="data:image/png;base64,"+base64;
        }
        else if (bytes > 60000) {
          self.setState({
          //  color: "holder bg-danger",
            message: "No signal from HDMI" });
//            document.getElementById(imageid).src="/img/no-signal.jpg";
            document.getElementById(imageid).src="data:image/png;base64,"+base64;
        }
        else {
          // self.setState({color: "holder bg-success" });
          self.setState({message: "OK" });
          document.getElementById(imageid).src="data:image/png;base64,"+base64;
        }
      } else{
        document.getElementById(imageid).src="/img/disabled.png";
      }
    };

    self.setState({showLoader: false });
    xhr.send();
  }
  customBase64Encode (inputStr) {
      var
          bbLen               = 3,
          enCharLen           = 4,
          inpLen              = inputStr.length,
          inx                 = 0,
          jnx,
          keyStr              = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
                              + "0123456789+/=",
          output              = "",
          paddingBytes        = 0;
      var
          bytebuffer          = new Array (bbLen),
          encodedCharIndexes  = new Array (enCharLen);

      while (inx < inpLen) {
          for (jnx = 0;  jnx < bbLen;  ++jnx) {
              /*--- Throw away high-order byte, as documented at:
                https://developer.mozilla.org/En/Using_XMLHttpRequest#Handling_binary_data
              */
              if (inx < inpLen)
                  bytebuffer[jnx] = inputStr.charCodeAt (inx++) & 0xff;
              else
                  bytebuffer[jnx] = 0;
          }

          /*--- Get each encoded character, 6 bits at a time.
              index 0: first  6 bits
              index 1: second 6 bits
                          (2 least significant bits from inputStr byte 1
                           + 4 most significant bits from byte 2)
              index 2: third  6 bits
                          (4 least significant bits from inputStr byte 2
                           + 2 most significant bits from byte 3)
              index 3: forth  6 bits (6 least significant bits from inputStr byte 3)
          */
          encodedCharIndexes[0] = bytebuffer[0] >> 2;
          encodedCharIndexes[1] = ( (bytebuffer[0] & 0x3) << 4)   |  (bytebuffer[1] >> 4);
          encodedCharIndexes[2] = ( (bytebuffer[1] & 0x0f) << 2)  |  (bytebuffer[2] >> 6);
          encodedCharIndexes[3] = bytebuffer[2] & 0x3f;

          //--- Determine whether padding happened, and adjust accordingly.
          paddingBytes          = inx - (inpLen - 1);
          switch (paddingBytes) {
              case 1:
                  // Set last character to padding char
                  encodedCharIndexes[3] = 64;
                  break;
              case 2:
                  // Set last 2 characters to padding char
                  encodedCharIndexes[3] = 64;
                  encodedCharIndexes[2] = 64;
                  break;
              default:
                  break; // No padding - proceed
          }

          /*--- Now grab each appropriate character out of our keystring,
              based on our index array and append it to the output string.
          */
          for (jnx = 0;  jnx < enCharLen;  ++jnx)
              output += keyStr.charAt ( encodedCharIndexes[jnx] );
      }
      return output;
  }

  getInitialState() {
    return {
      isMouseInside: false
    };
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
