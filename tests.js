const RomanNumber = require('./index')

test('RomanNumber is a class', () => {
  expect(typeof RomanNumber.prototype.constructor).toEqual('function')
})
