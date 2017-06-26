import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class ImageReload extends React.Component {

  constructor(props) {
         super(props);
         this.state = {
           imageurl: "http://" + this.props.ip + "/img/home.jpg",
           size: "dimensions",

         };
         this.tick = this.tick.bind(this);
         this.showsize = this.showsize.bind(this);
         this.componentDidMount = this.componentDidMount.bind(this);
     }


  tick() {
    this.setState({url: "http://" + this.props.ip + "/img/home.jpg?time="+new Date().getTime()});
  }

  componentDidMount() {
    this.interval = setInterval(
      this.tick,1000);

  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  showsize(){

    var req = new XMLHttpRequest();
    req.open('GET', this.state.imageurl, false);
    req.send(null);
    var bytes = req.getResponseHeader("Content-Length").toLowerCase();

    this.setState({bytes: bytes });

    if(bytes > 9000){
      this.setState({color: "bg-success" });
    } else {
      this.setState({color: "bg-danger" });
    }



    //  alert( img.width+' '+ img.height );

  }



  render() {
      return (
      <div className={this.state.color}>
        <h3>{this.props.name}</h3>
          <small>{this.state.bytes} kb</small>
          <br />
          <img src={this.state.url} className="img-responsive" onLoad={this.showsize} />
      </div>
    );
  }
}
