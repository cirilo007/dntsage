import React from 'react';
import ReactDOM from 'react-dom'
import Header from './components/header.js';
import Footer from './components/footer.js';

class App extends React.Component {
   render() {
      return (
         <div>
           <Header/>
           { this.props.children }
           <Footer text="this is my footer" />
         </div>
      );
   }
}

export default App;
