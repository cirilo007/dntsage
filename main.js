// Libs
import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

// CSS

// Components
import Layout from './pages/Layout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Videotest from './pages/Videotest.jsx';
import Reception from './pages/Reception.jsx';

// Render
render((
   <Router>
     <Layout>
      <Route exact path="/" component={Dashboard} />
      <Route path="/reception" component={Reception} />
      <Route path="/videotest" component={Videotest} />
      </Layout>
   </Router >
), document.getElementById('app'));
