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
    var div;
    var div2;
    if(this.props.serials.length > 0){
      return Object.keys(this.props.serials).map(function(key) {
          i++;
          { i == 1 || i == 6 || i == 11 || i == 16 ?  div = <div className="col-sm-1"></div> : div = null ;}
          { i == 5 || i == 10 || i == 15 || i == 20 ?  div2 = <div><div className="col-sm-1"></div><div className="row"></div></div> : div2 = null ;}
          //that.getSymptoms(that.props.serials[key]["slot_serial"]);

         return (
        <div key={key}>
          {div}
           <div  className="col-sm-2">
             <ImageReload
               url={"http://"+that.props.serials[key]['slot_ip']+"/img/feed"+that.props.serials[key]['slot_feed']+".jpg"}
               name={i}
               serial={that.props.serials[key]["serial_number"]}
               serial_id={that.props.serials[key]["slot_serial"]}
               teststatus={that.props.serials[key]["test_status"]}
               />
           </div>
           {div2}
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
