import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBody from './AppBody';
import AppBodyFunc from './AppBodyFunc';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [
        { title: 'Sofware Engineer', sex: 'Male', age: 25, id: 1 },
        { title: 'Data Scientist', sex: 'Female', age: 15, id: 2 }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          {/* Class/Container Component */}
          <AppBody data={ this.state.data } />
          {/* Functional/UI Component */}
          <AppBodyFunc data={ this.state.data } />
        </div>
      </div>
    );
  }
}

export default App;
