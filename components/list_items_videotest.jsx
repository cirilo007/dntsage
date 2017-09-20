import React from 'react';
import ImageReload from '../components/image_reload.js';

export default class ListItemsVideoTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      symptoms: []
    });
    }

  componentDidMount(){

  }

  serials(){

    var that = this;
    var i = 0
    if(this.props.serials.length > 0){
      return Object.keys(this.props.serials).map(function(key) {
          i++
          //that.getSymptoms(that.props.serials[key]["slot_serial"]);
         return (
         <div key={key} className="col-sm-2">
           <ImageReload
             url={"http://"+that.props.serials[key]['slot_ip']+"/img/feed"+that.props.serials[key]['slot_feed']+".jpg"}
             name={i}
             serial={that.props.serials[key]["serial_number"]}
             serial_id={that.props.serials[key]["slot_serial"]}
             teststatus={that.props.serials[key]["test_status"]}
             />
         </div>
         )
        });
    }
  }
  render() {

    return (
        <div className="row">
          <br/>
          {this.serials()}
        </div>
    );
  }
}
