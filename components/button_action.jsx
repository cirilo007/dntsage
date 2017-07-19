import React from 'react';
import ReactDOM from 'react-dom';

var FontAwesome = require('react-fontawesome');

export default class ButtonAction extends React.Component {

  constructor(props) {
         super(props);

     }
  componentDidMount() {
  }

  sendCommand(e) {
    alert("boom");
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://192.168.0.100/'+this.props.script, true);
      xhr.send();
  }

  render() {
    return (
      <div>

        <button className="btn btn-md btn-mybutt pull-left" onClick={this.sendCommand.bind(this)}>
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
