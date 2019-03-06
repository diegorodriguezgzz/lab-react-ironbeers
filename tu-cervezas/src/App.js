import React, { Component } from 'react';
import BeerList from './components/BeerList';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <BeerList />
        <Switch>
          <Route exact path='/' component={Navbar}/>
        </Switch>
      </div>
    );
  }
}

export default App;
