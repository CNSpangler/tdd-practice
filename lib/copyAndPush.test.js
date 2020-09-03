const { copyAndPush } = require('./copyAndPush');

describe('copyAndPush function', () => {
  const numbers = [1, 2, 3];
  it('returns an array with additional items appended', () => {
    expect(copyAndPush(numbers, 4)).toEqual([1, 2, 3, 4]);
  });
});
