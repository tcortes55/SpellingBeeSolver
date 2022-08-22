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

function App() {
  const words = [];

  for (let i = 0; i < 30; i++) {
    words.push("Word");
    words.push("Example");
    words.push("Times");
  }

  const [gameResponse, setGameResponse] = useState({});
  
  useEffect(() => {
    // const gameResponse2 = {};
    // gameResponse2.letters = "AOCGTIE";
    // gameResponse2.words = words;

    console.log(SettingsNyt.Url);

    fetchData(SettingsNyt.Url).then((gameResponse3) => {
      console.log(gameResponse3);

      const gameResponse2 = {};
      gameResponse2.letters = "AOCGTIE";
      gameResponse2.words = gameResponse3;

      setGameResponse(gameResponse2);
    })

    // const gameResponse2 = fetchData(SettingsNyt.Url);

    // console.log(gameResponse2);
    // gameResponse2.then(setGameResponse(gameResponse2));
    // console.log(gameResponse2);

    // setGameResponse(gameResponse2);
  }, []);

  return (
    <TempBg>
      <div className="App">
        <header className="App-header">
            <Panel gameResponse={gameResponse} settings={SettingsSelf}></Panel>
            <Panel gameResponse={gameResponse} settings={SettingsNyt}></Panel>
            <Panel gameResponse={gameResponse} settings={SettingsFreebee}></Panel>
        </header>
      </div>
    </TempBg>
  );
}

export default App;
