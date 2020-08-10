import React, { Component } from 'react';
import Routes from "./routes"


import './styles.css';

import Nav_bar from './components/nav_bar';

const App = () => (
      <div className="App">
        <Nav_bar /> 
        <Routes />
      </div>
);


export default App;
