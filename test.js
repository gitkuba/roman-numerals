const RomanNumber = require('./index')

test('RomanNumber is a class', () => {
  expect(typeof RomanNumber.prototype.constructor).toEqual('function')
})

test('throws for null', () => {
  expect(new RomanNumber(null)).toThrow('value required');
})

test('throws for an empty string', () => {
  expect(new RomanNumber('')).toThrow('value required');
})

test('returns correctly for input value = 0', () => {
  expect(new RomanNumber(0)).toThrow('invalid range');
})

test('returns correctly for input value = 1', () => {
  expect(new RomanNumber(1)).toThrow('invalid range');
})

test('returns correctly for input value = 3', () => {
  expect(new RomanNumber(3).toInt).toEqual(3);
})
