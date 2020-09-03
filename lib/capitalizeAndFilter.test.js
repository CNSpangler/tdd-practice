const capitalizeAndFilter = require('./capitalizeAndFilter');

describe('capitalizeAndFilter function', () => {
  const stringsNoF = ['this', 'ones', 'the', 'girls'];
  const strings = ['this', 'ones', 'for', 'the', 'girls']
  it('capitalizes all strings in array', () => {
    expect(capitalizeAndFilter(stringsNoF)).toEqual(['This', 'Ones', 'The', 'Girls']);
  });

  it('filters out all strings that begin with f', () => {
    expect(capitalizeAndFilter(strings)).toEqual(['This', 'Ones', 'The', 'Girls']);
  });
});
