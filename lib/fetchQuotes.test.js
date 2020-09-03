const fetchQuotes = require('./fetchQuotes');

describe('fetchQuotes function', () => {
  const url = 'http://futuramaapi.herokuapp.com/api/quotes';

  it('fetches quotes from API and formats into an object', () => {
    expect(fetchQuotes(url)).resolves.toEqual({
      name: 'Bender',
      text: 'Bite my shiny metal ass.',
      image: 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
    });
  });
});
