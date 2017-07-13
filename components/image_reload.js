import React from 'react';
import ReactDOM from 'react-dom';

import Loader from '../components/image_loader.jsx';
import Modal from 'react-modal'

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
           modalopen: false
         };
         this.tick = this.tick.bind(this);
         this.componentDidMount = this.componentDidMount.bind(this);
         this.openModal = this.openModal.bind(this);
         this.closeModal = this.closeModal.bind(this)
     }
  componentDidMount() {
    this.interval = setInterval(
      this.tick,3000);

  }
  tick(){

    var self = this;
    var xhr = new XMLHttpRequest();
    var imageid = "video_"+this.props.name;
    xhr.open('GET', this.props.url + "?time="+new Date().getTime(), true);
    xhr.timeout = 1000,
    xhr.responseType = 'arraybuffer';

    xhr.ontimeout = function(e) {
      self.setState({color: "holder bg-black" });
      self.setState({message: "Timeout, reconnecting..." });
      self.setState({bytes: "0" });
      document.getElementById(imageid).src="/img/no-connection.png";

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
        else if (bytes > 7000 && bytes < 9500) {
          self.setState({
            color: "holder bg-danger",
            message: "No signal from HDMI" });
          document.getElementById(imageid).src="data:image/png;base64,"+base64;
        }
        else {
          self.setState({color: "holder bg-success" });
          self.setState({message: "OK" });
          document.getElementById(imageid).src="data:image/png;base64,"+base64;
        }
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

  openModal() {
      this.setState({modalopen: true});
    }
  closeModal() {
      this.setState({modalopen: false});
    }
  render() {
    var imageid = "video_"+this.props.name;
      return (
      <div className="bg-black">
        <h5>
          <span className={this.state.color}>#{this.props.name}</span> &nbsp;{this.state.message}
            {this.state.showLoader ? <Loader /> : null}
        </h5>

          <small className="timer"> Feed {this.state.bytes} kb </small>
          <div className="crop">
            <img src="img/no-connection.png" id={imageid} className="img-responsive" alt={this.state.bytes} onClick={this.openModal} />
          </div>
          <Modal
            isOpen={this.state.modalopen}
            contentLabel="Video Modal"
          >
          <div className="text-center">
            <button className="close_modal" onClick={this.closeModal}>Close</button>
            <br />
            <img src={this.props.url + "?time="+new Date().getTime()} alt="" />
          </div>
        </Modal>

      </div>
    );
  }
};
