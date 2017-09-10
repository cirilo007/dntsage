import React from 'react';
import ReactDOM from 'react-dom';


export default class Overview extends React.Component {

  constructor(props) {
         super(props);
     }



  render() {
    var that = this
    var content = Object.keys(this.props.items).map(function(key) {
     return <div key={key}>
        {that.props.items[key]['total']} | {that.props.items[key]['state_name']}
     </div>
    });

    return(
      <div>
          {content}
      </div>

    )

  }
};
