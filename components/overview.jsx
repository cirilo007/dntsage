import React from 'react';
import ReactDOM from 'react-dom';


export default class Overview extends React.Component {

  constructor(props) {
         super(props);
     }



  render() {
    var that = this
    var content = Object.keys(this.props.items).map(function(key) {
     return <tr key={key}>
       <td>
         <img src={"./img/" + that.props.items[key]['product_img']} alt="" height="100" />
       </td>
      <td>
        <b>{that.props.items[key]['product_name']}</b>
      </td>
      <td>
        {that.props.items[key]['total0']}
      </td>
      <td>
        {that.props.items[key]['total1']}
      </td>
      <td>
        {that.props.items[key]['total2']}
      </td>
      <td>
        {that.props.items[key]['total3']}
      </td>
      <td>
        {that.props.items[key]['total4']}
      </td>
      <td>
        {that.props.items[key]['total5']}
      </td>
     </tr>
    });

    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th></th>
            <th>Producto</th>
            <th>Recepcion</th>
            <th>Video Test</th>
            <th>Repairs</th>
            <th>Refurbish</th>
            <th>Packaging</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {content}
        </tbody>
      </table>
    )

  }
};
