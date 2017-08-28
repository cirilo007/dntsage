import React from 'react';
import ReactDOM from 'react-dom';
import Switch from 'react-bootstrap-switch';
import ButtonStep from '../components/button_step.jsx';
import ButtonSwitch from '../components/button_switch.jsx';

export default class Steps extends React.Component {

  constructor(props) {
         super(props);
     }

  render() {
    var that = this
     var content = Object.keys(that.props.steps).map(function(key) {
     return <ButtonStep key={key} title={that.props.steps[key][1]} isactive={that.props.steps[key]["step_status"]} />
    });
    return (
      <div className="steps">
        {content}
        <button disabled className="btn btn-sm btn-danger">
          Validar
        </button>
        <div className="pull-right">
          <ButtonSwitch />
        </div>
      </div>
    );
  }
};
