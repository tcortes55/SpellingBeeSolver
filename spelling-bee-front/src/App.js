import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hive from './components/hive';
import styled from 'styled-components';

const TempBg = styled.div`
  width: 100vw;
`;

function App() {
  return (
    <TempBg>
      <div className="App">
        <header className="App-header">
            <Hive letters={"AOCGTIE"}></Hive>
        </header>
      </div>
    </TempBg>
  );
}

export default App;
