import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBody from './AppBody';
import AppBodyFunc from './AppBodyFunc';
import AppBodyEdit from "./AppBodyEdit";

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [
        { title: 'Sofware Engineer', name: 'Doe', sex: 'Male', age: 25, id: 1 },
        { title: 'Data Scientist', name:'John', sex: 'Female', age: 15, id: 2 }
      ]
    }
  }

  addData = (datum) => {
    datum.id = Math.random();
    let data = [...this.state.data, datum];
    this.setState({
      data: data
    })
  }

  deleteData = (id) => {

    let data = this.state.data.filter( datum => {
      return datum.id !== id;
    })

    this.setState({
      data: data
    });
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
          <AppBodyFunc deleteData={ this.deleteData } data={ this.state.data } />
          {/* Class/Container Form Component */}
          <AppBodyEdit addData={ this.addData } />
        </div>
      </div>
    );
  }
}

export default App;
