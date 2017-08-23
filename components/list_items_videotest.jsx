import React from 'react';

export default class ListItemsVideoTest extends React.Component {
  constructor(props) {
    super(props);
    }

  componentDidMount(){

  }

  serials(){
    var that = this;
    var i = 0
    if(this.props.serials.length > 0){
      return Object.keys(this.props.serials).map(function(key) {
          i++
         return (
         <div key={key} className="col-sm-1">
               {that.props.serials[key][1]}
         </div>
         )
        });
    }
  }
  render() {

    return (
      <div>
          <h1>{this.props.serials.length} Serials </h1>
          <div className="row">
            {this.serials()}
          </div>
      </div>
    );
  }
}
