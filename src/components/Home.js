import React from 'react';
import logo from '../logo.svg';
import Mode from './Mode.js';

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>No Slow Typer</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <Mode />
        </header>
      </div>
    )
  }
}

export default Home;
