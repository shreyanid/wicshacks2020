import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from "./components/Calendar"

class App extends Component {
  render() {
    var today = new Date();
    return (
        <div className="App">
          <Calendar />    
        </div>
        );
    }
}

export default App;
