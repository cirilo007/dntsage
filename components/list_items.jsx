import React from 'react';

export default class ListItems extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        serials: [],
        loading: true
     };
    }
  componentDidMount() {
    this.interval = setInterval(
      this.requestServer,1000);

  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let content;
    var that = this;
    if (this.props.loading === false && !this.props.serials.error) {
      content = Object.keys(this.props.serials).map(function(key) {
       return <tr key={key}>
               <td>
                 {that.props.serials[key][0]}
               </td>
               <td>
                 {that.props.serials[key][1]}
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
      if(this.props.serials.error){
        content = <tr>
                <td colSpan={4} className="text-center">
                    An error occured while retrieving the data.
                    <pre>
                      {this.props.serials.error}
                    </pre>
                </td>
              </tr>;
          } else {
      content = <tr>
              <td colSpan={4} className="text-center">
                  Waiting for data...
              </td>
            </tr>;
        }
    }

    return (
      <div>
          <h1>{this.props.serials.length} Serials:</h1>
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
