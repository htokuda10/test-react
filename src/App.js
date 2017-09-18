import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ServiceRequest from './Service_Request';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header text-center">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
          <ServiceRequest />
      </div>
    );
  }
}

export default App;
