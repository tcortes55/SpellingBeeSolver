const axios = require('axios').default;

const fetchData = async (url) => {
  const response = await axios.get(url);
  return response.data;
}

export const fillGameResult = (url, setResponseFunction) => {
    fetchData(url).then((response) => {
      const gameResult = {};
      gameResult.letters = (response.center + response.letters).toUpperCase();
      gameResult.words = response.wordlist;
  
      setResponseFunction(gameResult);
    });
  }