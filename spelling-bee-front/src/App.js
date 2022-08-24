import React, { useState, useEffect } from 'react';
import './App.css';
import Panel from './components/panel';
import LettersForm from './components/lettersForm';
import styled from 'styled-components';
import { SettingsSelf, SettingsNyt, SettingsFreebee, Strings } from './constants';
import { fillGameResult } from './api';

const TempBg = styled.div`
  width: 100vw;
`;

const generateEmptyGame = (setResponseFunction) => {
  const gameTemplate = {};
  gameTemplate.letters = "";
  gameTemplate.words = [];
  gameTemplate.awaitingUser = true;

  setResponseFunction(gameTemplate);
}

function App() {
  const [gameResponseSelf, setGameResponseSelf] = useState({});
  const [gameResponseNyt, setGameResponseNyt] = useState({});
  const [gameResponseFreebee, setGameResponseFreebee] = useState({});

  const testFunc = (txt) => console.log(txt);
  
  useEffect(() => {
    generateEmptyGame(setGameResponseSelf);
    fillGameResult(SettingsNyt.Url, setGameResponseNyt)
    fillGameResult(SettingsFreebee.Url, setGameResponseFreebee)
  }, []);
  
  return (
    <TempBg>
      <div className="App">
        <header className="App-header">
            <Panel gameResponse={gameResponseSelf} settings={SettingsSelf}>
              {
                gameResponseSelf.awaitingUser &&
                <LettersForm formLabel={Strings.LettersFormLabel} handleSubmit={testFunc}></LettersForm>
              }
            </Panel>
            <Panel gameResponse={gameResponseNyt} settings={SettingsNyt}></Panel>
            <Panel gameResponse={gameResponseFreebee} settings={SettingsFreebee}></Panel>
        </header>
      </div>
    </TempBg>
  );
}

export default App;
