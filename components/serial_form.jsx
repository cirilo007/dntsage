import React from 'react';

export default class SerialForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      value: '',
      formstyle: "form_serial"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }
  componentDidMount() {
    var that = this;
    var url = 'http://192.168.1.105/api/api.php/products?columns=id_prod,product_name';

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
      this.setState({formstyle: "form_serial",title_result: "Scan product"});

  }

  handleSubmit(event) {
    if(isNaN(this.state.value)){
      this.setState({
        formstyle: "form_serial_red",
        value: "",
        title_result: "Serial Number should only contain numeric values"
      });
      setTimeout(() => {
              this.setState({
                formstyle: "form_serial",
                value: "",
                title_result: "Scan product"
              })
          }, 1000)
      return false;
    }
    var that = this;
    var url = 'http://192.168.1.105/api/api.php/serials';
    fetch(url, {
      method: 'post',
      body: JSON.stringify({id_serial: '', serial_number: this.state.value})
  }).then(res=>res.json())
    .then(
          this.setState({
            formstyle: "form_serial_green",
            value: "",
            title_result: "Serial Number inserted"
        })
    )
    .then(setTimeout(() => {
            this.setState({
              formstyle: "form_serial",
              value: "",
              title_result: "Scan product"
            })
        }, 2000))

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

      <form id="serial_input" className={this.state.formstyle} onSubmit={this.handleSubmit}>
        <h2>{this.state.title_result}</h2>
        <label className="input_wrapper">
          <input type="text" value={this.state.value} onChange={this.handleChange} autoFocus />
        </label>
      </form>
    );
  }
}
