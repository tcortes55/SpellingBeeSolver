import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Panel from './components/panel';
import styled from 'styled-components';

const TempBg = styled.div`
  width: 100vw;
`;

function App() {
  return (
    <TempBg>
      <div className="App">
        <header className="App-header">
            <Panel></Panel>
        </header>
      </div>
    </TempBg>
  );
}

export default App;
