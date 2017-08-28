import React from 'react';
import ReactDOM from 'react-dom';
import Switch from 'react-bootstrap-switch';

export default class Steps extends React.Component {

  constructor(props) {
         super(props);
        this.state = {
          switchState: true
        }
     }

  componentDidMount(){

  }



  render() {
    return (
      <div>
        <a className="btn btn-sm btn-info">1- Instalar productos</a> > <a className="btn btn-sm btn-info">2- Prueba RCA</a> > <a className="btn btn-sm btn-info">3- Prueba HDMI</a> > <a className="btn btn-sm btn-info">4- Prueba Senal Antena</a> > <a className="btn btn-sm btn-info">5- Software update</a> > <a className="btn btn-sm btn-danger">Validar</a>
      </div>
    );
  }
};
