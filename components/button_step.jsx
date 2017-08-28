import React from 'react';
import ReactDOM from 'react-dom';
var FontAwesome = require('react-fontawesome');

export default class ButtonStep extends React.Component {

  constructor(props) {
         super(props);
         this.state = ({
           isactive: this.props.isactive
         });

         this.handleClick = this.handleClick.bind(this)

     }
  componentDidMount() {
  }

  handleClick(){

    this.setState({
      isactive: !this.state.isactive
    });

  }

  render() {
    return (
          this.state.isactive == 1
            ?
              <button className="btn btn-sm btn-info">
                <FontAwesome
                  className='fa fa-circle-o-notch fa-spin fa-fw'
                  name={this.props.title}
                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                /> <b>{this.props.stepkey}</b> - {this.props.title}
              </button>
          :
          this.state.isactive == 2
            ?
              <button className="btn btn-sm">
                <FontAwesome
                  className='fa fa-cog'
                  name={this.props.title}
                  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                /> <b>{this.props.stepkey}</b> - {this.props.title} 
              </button>

           :
              <button className="btn btn-sm btn-default" onClick={this.handleClick}>
                 <FontAwesome
                   className='fa fa-cog'
                   name={this.props.title}
                   style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                 /> <b>{this.props.stepkey}</b> - {this.props.title}
              </button>

    );
  }
};
