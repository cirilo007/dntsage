import React from 'react';

export default class SerialForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      value: '',
      formstyle: "form_serial",
      disabled: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    var that = this;
    var url = 'http://192.168.1.107/api/api.php/products?columns=id_prod,product_name';

    return fetch(url)
    .then((result) => {
      return result.json();
    }).
    then((items) => {
        this.setState({
          products: items.products.records,
          loading: false,
          title_result: "Scan product"
        });
      }
    )
  }

  handleChange(event) {
    this.setState({value: event.target.value});

  }

  handleSubmit(event) {

    if(isNaN(this.state.value)){
      this.setState({
        formstyle: "form_serial_red",
        value: this.state.value,
        title_result: "Serial Number should only contain numeric values",
        disabled: !this.state.disabled
      });
      setTimeout(() => {
              this.setState({
                formstyle: "form_serial",
                value: "",
                title_result: "Scan product",
                disabled: !this.state.disabled
              });
              this.serial_input.focus();
          }, 1000);

          return false;
      }

        var that = this;
switch(this.props.formName) {
case "serialcheck_reception" :
          var url = 'http://192.168.1.107/api/api.php/serials';
          fetch(url, {
            method: 'post',
            body: JSON.stringify({id_serial: '', serial_number: this.state.value})
          })
          .then(res=>res.text())
          .then(result=>{
            if(result > 1){
              that.setState({
                formstyle: "form_serial_green",
                value: this.state.value,
                title_result: "Serial Number inserted",
                disabled: !this.state.disabled
              });
              setTimeout(() => {
                      this.setState({
                        formstyle: "form_serial",
                        value: "",
                        title_result: "Scan product",
                        disabled: !this.state.disabled
                      });
                      this.serial_input.focus();
                  }, 2000);
              } else {
                that.setState({
                  formstyle: "form_serial_red",
                  value: this.state.value,
                  title_result: "Serial Number duplicated",
                  disabled: !this.state.disabled
                });
                setTimeout(() => {
                        this.setState({
                          formstyle: "form_serial",
                          value: "",
                          title_result: "Scan product",
                          disabled: !this.state.disabled
                        });
                        this.serial_input.focus();
                    }, 2000);
              }
            }
          )

break
case "serialcheck_videotest" :


          var url = 'http://192.168.1.107/api/api.php/serials?filter=serial_number,eq,'+this.state.value;
          return fetch(url)
          .then((result) => {
            return result.json();
          }).
          then((items) => {
              if(items.serials.records.length === 1){
                that.setState({
                  formstyle: "form_serial_green",
                  value: this.state.value,
                  title_result: "Serial Number is valid",
                  disabled: !this.state.disabled
                });
                setTimeout(() => {
                        this.setState({
                          formstyle: "form_serial",
                          value: "",
                          title_result: "Scan product",
                          disabled: !this.state.disabled
                        });
                        this.serial_input.focus();
                    }, 2000);
              } else{
                that.setState({
                  formstyle: "form_serial_red",
                  value: this.state.value,
                  title_result: "Serial Number is not in database. Please send to reception",
                  disabled: !this.state.disabled
                });
                setTimeout(() => {
                        this.setState({
                          formstyle: "form_serial",
                          value: "",
                          title_result: "Scan product",
                          disabled: !this.state.disabled
                        });
                        this.serial_input.focus();
                    }, 2000);
              }
            }
          )




break

}




  }

  render() {

    let products;
    var that = this;
    if (this.state.loading === false) {
      products = Object.keys(this.state.products).map(function(key) {
       return <option key={key} value={that.state.products[key][0]}>{that.state.products[key][1]}</option>
      });
    } else {
      products = '';
    }

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
