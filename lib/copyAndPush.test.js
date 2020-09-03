const { copyAndPush } = require('./copyAndPush');

describe('copyAndPush function', () => {
  it('returns an array with additional items appended', () => {
    const numbers = [1, 2, 3];

    expect(copyAndPush(numbers, 4)).toEqual([1, 2, 3, 4]);
  });
});
