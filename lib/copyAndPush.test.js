const copyAndPush = require('./copyAndPush');

describe('copyAndPush function', () => {
  it('copies and pushes', () => {
    expect(copyAndPush()).toEqual('spot');
  });
});
