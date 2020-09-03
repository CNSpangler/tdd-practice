const fetch = require('node-fetch');

const fetchQuotes = async(url) => {
  await fetch(url)
    .then(res => res.json())
    .then(json => ({
      name: json[0].character,
      text: json[0].quote,
      image: json[0].image
    }))
    .catch(error => console.log(error));
};

// fetchQuotes('http://futuramaapi.herokuapp.com/api/quotes');

module.exports = fetchQuotes;
