import React from 'react';
import ReactDOM from 'react-dom';

export default class ButtonReset extends React.Component {

  constructor(props) {
         super(props);

     }
  componentDidMount() {
  }

  factoryReset(e) {
    alert("boom");
    exec('sh lirc_fr.sh',
      function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
          console.log('exec error: ' + error);
        }
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.factoryReset.bind(this)}>
          Factory Reset
        </button>
      </div>
    );
  }
};
