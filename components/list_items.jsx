import React from 'react';

export default class ListItems extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        serials: [],
        loading: true
     };
     this.requestServer = this.requestServer.bind(this);
    }
  componentDidMount() {
    this.interval = setInterval(
      this.requestServer,1000);

  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  requestServer() {
    var that = this;
    var url = 'http://192.168.1.107/api/api.php/serials?columns=id_serial,serial_number&order=id_serial,desc';

    return fetch(url)
    .then((result) => {
      return result.json();
    }).
    then((items) => {
        this.setState({
          serials: items.serials.records,
          loading: false
        });
      }
    )
  }
  render() {
    let content;
    var that = this;
    if (this.state.loading === false) {
      content = Object.keys(this.state.serials).map(function(key) {
       return <tr key={key}>
               <td>
                 {that.state.serials[key][0]}
               </td>
               <td>
                 {that.state.serials[key][1]}
               </td>
               <td>
                 <a href="">
                   <i className="fa fa-edit"></i>
                 </a>
               </td>
               <td>
                 <a href="">
                   <i className="fa fa-trash"></i>
                   </a>
              </td>
             </tr>
      });
    } else {
      content = <tr>
              <td colSpan={4} className="text-center">
                  Waiting for data...
              </td>
            </tr>;
    }

    return (
      <div>
          <h1>Serials:</h1>
          <br/>
          <table className="jsonTable">
            <thead>
              <tr>
                <th>id_serial</th>
                <th>serial_number</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {content}
            </tbody>
          </table>

      </div>
    );
  }
}
