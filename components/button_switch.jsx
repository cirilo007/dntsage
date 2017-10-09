import React from 'react';
import ReactDOM from 'react-dom';
import Switch from 'react-bootstrap-switch';
import * as constants from '../constants/AppConstants.js';

export default class ButtonAction extends React.Component {

  constructor(props) {
         super(props);
        this.state = {
          switchState: true
        }
     }

  componentDidMount(){
    fetch("http://192.168.1.100/hdmiswitch.php?test=3")

  }

  sendCommand(e) {
    if(this.state.switchState){
      var url = 'http://192.168.1.100/hdmiswitch.php?test=1';
    } else {
      var url = 'http://192.168.1.100/hdmiswitch.php?test=3';
    }
    this.setState( { switchState: !this.state.switchState } );
    fetch(url);

  }


  render() {
    return (
      <div className="pull-right">
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
