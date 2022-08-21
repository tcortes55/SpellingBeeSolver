import React, { Component } from 'react';
import './App.css';
import Panel from './components/panel';
import styled from 'styled-components';

const TempBg = styled.div`
  width: 100vw;
`;

function App() {
  const words = [];

  for (let i = 0; i < 30; i++) {
    words.push("Word");
    words.push("Example");
    words.push("Times");
  }

  const gameResponse = {};
  gameResponse.letters = "AOCGTIE";
  gameResponse.words = words;

  return (
    <TempBg>
      <div className="App">
        <header className="App-header">
            <Panel gameResponse={gameResponse} defaultExpanded={true}></Panel>
        </header>
      </div>
    </TempBg>
  );
}

export default App;
