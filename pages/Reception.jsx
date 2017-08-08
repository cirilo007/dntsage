import React from 'react';
import SerialForm from '../components/serial_form.jsx';

export default class Reception extends React.Component {
  render() {
    return (
    <div>
      <h1><img src="img/taoscanner.png" alt="scanner" height="40" /> Reception</h1>

      <SerialForm />
    </div>
    )
  }
}
