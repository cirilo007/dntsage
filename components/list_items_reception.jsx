import React from 'react';

export default class ListItemsReception extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        serials: []
     };
    }
    
  render() {
    let content;
    content = Object.keys(this.props.serials).map(function(key) {
       return
       <div key={key} className="row">
         <div className="col-sm-12">
           hello {this.props.serials[key]['id_serial']}
         </div>
       </div>
      });


    return (
      <div>
        {content}
      </div>
    );
  }
}
