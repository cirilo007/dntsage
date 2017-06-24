import React from 'react';
import ReactDOM from 'react-dom';


var ImageReload = React.createClass({
  getInitialState: function() {
    return {url: this.props.imageurl};
  },
  tick: function() {
    this.setState({url: this.props.imageurl + "?time="+new Date().getTime()});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div>
      <br />
      <img src={this.state.url} className="img-responsive" />
      </div>
    );
  }
});

export default ImageReload;
