const { getName } = require('./getName');

describe('getName function', () => {
  it('gets name value from an object', () => {
    const dog = { name: 'Spot', age: 5, weight: '20 lbs' };
    expect(getName(dog)).toEqual('Spot');
  });
});
