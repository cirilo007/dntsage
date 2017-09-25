import React from 'react';
import * as constants from '../constants/AppConstants.js';

export default class SerialForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState()

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getInitialState() {
      const initialState = {
        products: [],
        value: '',
        formstyle: "form_serial",
        disabled: false,
        title_result: this.props.formInitialTitle
      };
      return initialState;
  }
  componentDidMount() {
    switch(this.props.formName) {

      case "serialcheck_videotest":
          this.setState({
            title_result: "Escanear y instalar " + this.props.remaining + " productos"
          });
        break;
        case "serialcheck_reception":
        this.setState({
          title_result: "Ingresar un producto"
        });
          break;
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});

  }

  handleSubmit(event) {

    var first = this.state.value.charAt(0);

    if(this.state.value.length < '12'){
      this.setState({
        formstyle: "form_serial_red",
        value: this.state.value,
        title_result: "Serial Number invalido",
        disabled: !this.state.disabled
      });
      setTimeout(() => {
              this.setState(this.getInitialState());
              this.serial_input.focus();
          }, 1000);

          return false;
      }

        var that = this;
switch(this.props.formName) {
case "serialcheck_reception" :
          let product;

          this.state.value.length === 12 ? ( product = "1") : (product = "2")


          var url = 'http://'+ constants.LOCAL_SERVER +'/api/serials/add/';
          fetch(url, {
            method: 'post',
            body: JSON.stringify({id_serial: '', serial_number: this.state.value, serial_id_product: product, user: localStorage.getItem('profile')})
          })
          .then(res=>res.json())
          .then(result=>{
            console.log(result);
            if(result.status == 'ok'){
              that.setState({
                formstyle: "form_serial_green",
                value: this.state.value,
                title_result: "Serial Number inserted",
                disabled: !this.state.disabled
              });
              setTimeout(() => {
                      this.setState(this.getInitialState());
                      this.serial_input.focus();
                  }, 1000);
              } else {
                that.setState({
                  formstyle: "form_serial_red",
                  value: this.state.value,
                  title_result: "Serial ya existe en el sistema",
                  disabled: !this.state.disabled
                });
                setTimeout(() => {
                        this.setState(this.getInitialState());
                        this.serial_input.focus();
                    }, 1000);
              }
            }
          )

break
case "serialcheck_videotest" :
          var url = 'http://'+ constants.LOCAL_SERVER +'/api/changeState/1/'+ this.state.value;
          return fetch(url)
          .then((result) => {
            return result.json();
          }).
          then((items) => {
              if(items.status === "success"){
                that.setState({
                  formstyle: "form_serial_green",
                  value: this.state.value,
                  title_result: "Serial Number added to test bench. Connect product to slot ",
                  disabled: !this.state.disabled
                });
                setTimeout(() => {
                        this.setState(this.getInitialState());
                        this.serial_input.focus();
                    }, 1000);
              } else{
                that.setState({
                  formstyle: "form_serial_red",
                  value: this.state.value,
                  title_result: "Failure",
                  disabled: !this.state.disabled
                });
                setTimeout(() => {
                        this.setState(this.getInitialState());
                        this.serial_input.focus();
                    }, 1000);
              }
            }
          )

break

}




  }

  render() {

    return (
      <form id="serial_form" className={this.state.formstyle} onSubmit={this.handleSubmit}>
        <h2>{this.state.title_result}</h2>
        <label className="input_wrapper">
          <input
          ref={(input) => { this.serial_input = input; }}
          type="text" value={this.state.value} onChange={this.handleChange} autoFocus disabled = {(this.state.disabled)? "disabled" : ""} />
        </label>
      </form>
    );
  }
}
