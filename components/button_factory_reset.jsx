import React from 'react';
import ReactDOM from 'react-dom';

function factoryReset(e) {
  alert("boom");
  var sys = require('sys')
  var exec = require('child_process').exec;
  function puts(error, stdout, stderr) { sys.puts(stdout) }
  exec("sh lirc.sh", puts);
}

export default class ButtonReset extends React.Component {

  constructor(props) {
         super(props);

     }
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <button onClick={factoryReset}>
          Factory Reset
        </button>
      </div>
    );
  }
};
