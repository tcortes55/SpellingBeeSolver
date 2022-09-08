import React, { useState, useEffect } from 'react';
import './App.css';
import Panel from './components/panel';
import GenericTextForm from './components/genericTextForm';
import styled from 'styled-components';
import { SettingsSelf, SettingsNyt, SettingsFreebee, Strings } from './constants';
import { fillGameResult } from './api';
import ButtonWrapper from './components/buttonWrapper';

const TempBg = styled.div`
  width: 100vw;
`;

const generateEmptyGame = (setResponseFunction) => {
  const gameTemplate = {};
  gameTemplate.letters = "";
  gameTemplate.words = [];
  gameTemplate.awaitingUser = true;
  gameTemplate.awaitingApi = false;

  setResponseFunction(gameTemplate);
}

function App() {
  const [gameResponseSelf, setGameResponseSelf] = useState({awaitingApi: true});
  const [gameResponseNyt, setGameResponseNyt] = useState({awaitingApi: true});
  const [gameResponseFreebee, setGameResponseFreebee] = useState({awaitingApi: true});

  const [currentPanel, setCurrentPanel] = useState(SettingsSelf.Title);
  const handlePanelChange = (panel) => (event, isExpanded) => {
    setCurrentPanel(panel);
  };

  const handleLettersForm = (letters) => {
    setGameResponseSelf({ awaitingApi: true });
    fillGameResult(SettingsSelf.Url + letters, setGameResponseSelf)
  };
  
  useEffect(() => {
    generateEmptyGame(setGameResponseSelf);
    fillGameResult(SettingsNyt.Url, setGameResponseNyt)
    fillGameResult(SettingsFreebee.Url, setGameResponseFreebee)
  }, []);
  
  return (
    <TempBg>
      <div className="App">
        <header className="App-header">
            <Panel gameResponse={gameResponseSelf} settings={SettingsSelf} currentPanel={currentPanel} handleChange={handlePanelChange}>
              {
                gameResponseSelf.awaitingUser
                ? <GenericTextForm formLabel={Strings.LettersFormLabel} handleSubmit={handleLettersForm}></GenericTextForm>
                : <ButtonWrapper variant="contained" onClick={() => generateEmptyGame(setGameResponseSelf)} fullWidth>RESET</ButtonWrapper>
              }
            </Panel>
            <Panel gameResponse={gameResponseNyt} settings={SettingsNyt} currentPanel={currentPanel} handleChange={handlePanelChange}></Panel>
            <Panel gameResponse={gameResponseFreebee} settings={SettingsFreebee} currentPanel={currentPanel} handleChange={handlePanelChange}></Panel>
        </header>
      </div>
    </TempBg>
  );
}

export default App;
