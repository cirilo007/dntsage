import React from 'react';
import ReactDOM from 'react-dom';
var FontAwesome = require('react-fontawesome');
import * as constants from '../constants/AppConstants.js';

export default class ButtonAction extends React.Component {

  constructor(props) {
         super(props);
         this.state = {
           disabled:false
         };

     }
  componentDidMount() {
  }

  sendCommand(e) {
    var sys = require('sys');
    var exec = require('child_process').exec;
    function puts(error, stdout, stderr) { sys.puts(stdout) }
    //exec("sudo sh /home/pi/lirc_01.sh", puts);

      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://'+ constants.ACTION_SERVER +'/'+this.props.script, true);
      xhr.send();
      this.setState({disabled:true});
  }

  render() {
    return (
      <div>
        <button className="btn btn-md btn-default pull-left" disabled={this.state.disabled} onClick={this.sendCommand.bind(this)}>
          <FontAwesome
            className='balance-scale'
            name={this.props.ico}
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          /> {this.props.name}
        </button>
      </div>
    );
  }
};
