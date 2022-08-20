import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Panel from './components/panel';
import styled from 'styled-components';

const TempBg = styled.div`
  width: 100vw;
`;

function App() {
  const words = [];
  words.push("Word");
  words.push("Example");
  words.push("Times");
  words.push("Word");
  words.push("Example");
  words.push("Times");
  words.push("Word");
  words.push("Example");
  words.push("Times");
  words.push("Word");
  words.push("Example");
  words.push("Times");
  words.push("Word");
  words.push("Example");
  words.push("Times");
  words.push("Word");
  words.push("Example");
  words.push("Times");
  words.push("Word");
  words.push("Example");
  words.push("Times");
  words.push("Word");
  words.push("Example");
  words.push("Times");
  words.push("Word");
  words.push("Example");
  words.push("Times");
  words.push("Word");
  words.push("Example");
  words.push("Times");
  words.push("Word");
  words.push("Example");
  words.push("Times");
  words.push("Word");
  words.push("Example");
  words.push("Times");
  words.push("Word");
  words.push("Example");
  words.push("Times");
  words.push("Word");
  words.push("Example");
  words.push("Times");

  const gameResponse = {};
  gameResponse.letters = "AOCGTIE";
  gameResponse.words = words;

  return (
    <TempBg>
      <div className="App">
        <header className="App-header">
            <Panel gameResponse={gameResponse}></Panel>
        </header>
      </div>
    </TempBg>
  );
}

export default App;
