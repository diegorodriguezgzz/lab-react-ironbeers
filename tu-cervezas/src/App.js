import React, { Component } from 'react';
//import Navbar from './components/Navbar';
import BeerList from './components/BeerList';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BeerList />
      </div>
    );
  }
}

export default App;
