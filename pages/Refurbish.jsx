import React from 'react';
import SerialForm from '../components/serial_form.jsx';
import ListItems from '../components/list_items.jsx';

var FETCH_TIMEOUT = 500;

export default class Refurbish extends React.Component {
  constructor() {
        super();
        this.state = {
          serials : [],
          loading: false
        }

        this.getSerials = this.getSerials.bind(this);
    }

    getSerials(){
      var that = this;
      var url = 'http://192.168.1.107/api/serials/3';

      return fetch(url)
      .then((result) => {
        return result.json();
      }).
      then((items) => {
          this.setState({
            serials: items,
            loading: false
            });
        }
      )
    }

    componentDidMount() {
      this.getSerials();
      this.interval = setInterval(
        this.getSerials,2000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
    return (
    <div>
      <h1><img src="img/taoscanner.png" alt="scanner" height="40" /> Refurbish</h1>
      <SerialForm formName="serialcheck_reception" />
      <ListItems serials={this.state.serials} loading={this.state.loading}/>
    </div>
    )
  }
}
