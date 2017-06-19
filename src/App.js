import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ItemContainer from './item.container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ItemContainer />
      </div>
    );
  }
}

export default App;
