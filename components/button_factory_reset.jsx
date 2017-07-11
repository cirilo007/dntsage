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
