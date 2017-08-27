import React from 'react';

export default class ListSymptoms extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
         isChecked: false
     };
     this.checkChange = this.checkChange.bind(this)
    }


    componentDidMount(){

    }
    checkStatus(){

    }

    checkChange(event){
      let url
      {!event.target.checked
        ?
          url = 'http://192.168.1.107/api/removeserial2symptom/'+event.target.value+'/'+this.props.serial_id
        :
          url = 'http://192.168.1.107/api/addserial2symptom/'+event.target.value+'/'+this.props.serial_id
      }
      this.setState({isChecked: !this.state.isChecked});
      fetch(url)
      .then(res=>res.text())
      .then(result=>{
      //  console.log(result)
        }
      )

    }

render() {
   var that = this;

   let content = Object.keys(this.props.symptoms).map(function(key) {
   return <div key={key} className="symptom">
           <input type="checkbox" value={that.props.symptoms[key][0]} onChange={that.checkChange} defaultChecked={that.props.symptoms[key]['id_serial'] ? true : false }></input> {that.props.symptoms[key][1]}
          </div>
  });

    return (
      <div>
      {content}
      </div>
    );
  }
}
