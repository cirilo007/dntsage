import React from 'react';
import ReactDOM from 'react-dom'
import Header from '../components/header.js';
import Footer from '../components/footer.js';

export default class Layout extends React.Component {
   render() {
      return (
         <div>
           <Header />
           { this.props.children }
         </div>
      );
   }
}
