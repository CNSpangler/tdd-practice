const fetch = require('node-fetch');

const fetchQuotes = (url) => {
  fetch(url)
    .then(res => res.json())
    .then(json => ({
      name: json[0].character,
      text: json[0].quote,
      image: json[0].image
    }));
  // .then(formatted => console.log(formatted));
};

fetchQuotes('http://futuramaapi.herokuapp.com/api/quotes');

module.exports = fetchQuotes;
