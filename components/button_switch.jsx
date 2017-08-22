import React from 'react';
import ReactDOM from 'react-dom';
import Switch from 'react-bootstrap-switch';

export default class ButtonAction extends React.Component {

  constructor(props) {
         super(props);
        this.state = {
          switchState: true
        }
     }

  componentDidMount(){
    var sys = require('sys');
    var exec = require('child_process').exec;
    function puts(error, stdout, stderr) { sys.puts(stdout) ; alert(error); }
      var xhr = new XMLHttpRequest();
      xhr.open('GET', "http://192.168.1.107/hdmiswitch.php?test=3", true);
      xhr.send();

  }

  sendCommand(e) {
    if(this.state.switchState){
      var url = "http://192.168.1.107/hdmiswitch.php?test=1";
    } else {
      var url = "http://192.168.1.107/hdmiswitch.php?test=3";
    }
    this.setState( { switchState: !this.state.switchState } );
    var sys = require('sys');
    var exec = require('child_process').exec;
    function puts(error, stdout, stderr) { sys.puts(stdout) ; alert(error); }
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.send();

  }


  render() {
    return (
      <div>
        <Switch
          onColor = "warning"
          offColor = "danger"
          onText ="RCA"
          offText ="HDMI"
          size = "large"
          onChange={this.sendCommand.bind(this)}
          />
      </div>
    );
  }
};
