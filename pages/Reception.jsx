import React from 'react';
import SerialForm from '../components/serial_form.jsx';
import ListItems from '../components/list_items.jsx';

var FETCH_TIMEOUT = 500;

export default class Reception extends React.Component {
  constructor() {
        super();
    }

    render() {
    return (
    <div>
      <h1><img src="img/taoscanner.png" alt="scanner" height="40" /> Reception</h1>
      <SerialForm formName="serialcheck_reception" />
      <ListItems />
    </div>
    )
  }
}
