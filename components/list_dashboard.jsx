import React from 'react';

export default class ListDashboard extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        serials: [],
        loading: true
     };
    }
  componentDidMount() {
    this.interval = setInterval(
      this.requestServer,1000);

  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {

    return (
      <div>
          Dashboard
      </div>
    );
  }
}
