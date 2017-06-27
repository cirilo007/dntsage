import React from 'react';
import ReactDOM from 'react-dom';
import Lightbox from 'react-image-lightbox';

export default class ImageReload extends React.Component {

  constructor(props) {
         super(props);
         this.state = {
           url: this.props.url,
           size: "0",
           color: "holder bg-black"

         };
         this.tick = this.tick.bind(this);
         this.componentDidMount = this.componentDidMount.bind(this);
     }


  componentDidMount() {
    this.interval = setInterval(
      this.tick,1000);

  }



  tick(){
/*
    var req = new XMLHttpRequest();
    req.open('GET', this.props.url +"?time="+new Date().getTime(), false);
    req.send(null);
    var bytes = req.getResponseHeader("Content-Length").toLowerCase();

    this.setState({bytes: bytes });

    if (bytes > 7000 && bytes < 9000) {
      this.setState({url: this.props.url + "?time="+new Date().getTime()});
      this.setState({color: "holder bg-danger" });
    }

    if (bytes > 9000) {
      this.setState({url: this.props.url + "?time="+new Date().getTime()});
      this.setState({color: "holder bg-success" });
    }
*/
//console.log("Starting new download on " +this.props.url);
var self = this;

    var xhr = new XMLHttpRequest();
    var imageid = "video_"+this.props.name;
    xhr.open('GET', this.props.url +"?time="+new Date().getTime(), true);

    xhr.responseType = 'arraybuffer';

    xhr.onload = function(e) {
    if (this.status == 200) {
      var uInt8Array = new Uint8Array(this.response);
      var i = uInt8Array.length;
      var binaryString = new Array(i);
      while (i--)
      {
        binaryString[i] = String.fromCharCode(uInt8Array[i]);
      }
      var data = binaryString.join('');

      var base64 = window.btoa(data);



      var bytes = xhr.getResponseHeader("content-length").toLowerCase();
      self.setState({bytes: bytes });

      if (bytes > 7000 && bytes < 9000) {
        self.setState({color: "holder bg-danger" });
        document.getElementById(imageid).src="data:image/png;base64,"+base64;
      }
      if (bytes > 9000) {
        self.setState({color: "holder bg-success" });
        document.getElementById(imageid).src="data:image/png;base64,"+base64;
      }



    }
    };

    xhr.send();








    //  alert( img.width+' '+ img.height );

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

  render() {
    var imageid = "video_"+this.props.name;
      return (
      <div className={this.state.color}>
        <h3>{this.props.name}</h3>
          <small> {this.state.bytes} kb </small>
          <img src={this.props.url} id={imageid} className="img-responsive" />
      </div>
    );
  }
}
