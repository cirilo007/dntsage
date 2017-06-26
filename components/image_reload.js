import React from 'react';
import ReactDOM from 'react-dom';
import Lightbox from 'react-image-lightbox';

export default class ImageReload extends React.Component {

  constructor(props) {
         super(props);
         this.state = {
           url: this.props.url,
           size: "dimensions",
           color: "holder bg-black"

         };
         this.tick = this.tick.bind(this);
         this.componentDidMount = this.componentDidMount.bind(this);
     }


  componentDidMount() {
    this.interval = setInterval(
      this.tick,1000);

  }



  tick(){

    var req = new XMLHttpRequest();
    req.open('GET', this.props.url +"?time="+new Date().getTime(), false);
    req.send(null);
    var bytes = req.getResponseHeader("Content-Length").toLowerCase();

    this.setState({bytes: bytes });

    if (bytes > 7000 && bytes < 9000) {
      this.setState({url: this.props.url + "?time="+new Date().getTime()});
      this.setState({color: "holder bg-danger" });
    }

    if (bytes > 9000) {
      this.setState({url: this.props.url + "?time="+new Date().getTime()});
      this.setState({color: "holder bg-success" });
    }




    //  alert( img.width+' '+ img.height );

  }



  render() {
      return (
      <div className={this.state.color}>
        <h3>{this.props.name}</h3>
          <small> {this.state.bytes} kb </small>
          <img src={this.state.url} className="img-responsive" />
      </div>
    );
  }
}
