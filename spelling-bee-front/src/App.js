import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HiveCell from './components/hiveCell';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <HiveCell isCenter={false}>A</HiveCell>
        <HiveCell isCenter={true}>T</HiveCell>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
