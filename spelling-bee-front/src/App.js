import React, { useState, useEffect } from 'react';
import './App.css';
import Panel from './components/panel';
import styled from 'styled-components';
import { SettingsSelf, SettingsNyt, SettingsFreebee } from './constants';

const TempBg = styled.div`
  width: 100vw;
`;

const axios = require('axios').default;

const fetchData = async (url) => {
  const response = await axios.get(url);
  return response.data;
}

const fillGameResult = (url, setResponseFunction) => {
  fetchData(url).then((response) => {
    const gameResult = {};
    gameResult.letters = (response.center + response.letters).toUpperCase();
    gameResult.words = response.wordlist;

    setResponseFunction(gameResult);
  });
}

function App() {
  const [gameResponseSelf, setGameResponseSelf] = useState({});
  const [gameResponseNyt, setGameResponseNyt] = useState({});
  const [gameResponseFreebee, setGameResponseFreebee] = useState({});
  
  useEffect(() => {
    fillGameResult(SettingsSelf.Url + "aocgtie", setGameResponseSelf)
    fillGameResult(SettingsNyt.Url, setGameResponseNyt)
    fillGameResult(SettingsFreebee.Url, setGameResponseFreebee)
  }, []);

  return (
    <TempBg>
      <div className="App">
        <header className="App-header">
            <Panel gameResponse={gameResponseSelf} settings={SettingsSelf}></Panel>
            <Panel gameResponse={gameResponseNyt} settings={SettingsNyt}></Panel>
            <Panel gameResponse={gameResponseFreebee} settings={SettingsFreebee}></Panel>
        </header>
      </div>
    </TempBg>
  );
}

export default App;
