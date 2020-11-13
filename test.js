const RomanNumber = require("./index");

test("RomanNumber is a class", () => {
  expect(typeof RomanNumber.prototype.constructor).toEqual("function");
});

test("throws for null", () => {
  expect(() => new RomanNumber(null)).toThrow("value required");
});

test("throws for an empty string", () => {
  expect(() => new RomanNumber("")).toThrow("value required");
});

test("returns correctly for input value = 0", () => {
  expect(() => new RomanNumber(0)).toThrow("invalid range");
});

test("returns correctly for input value = 0.1", () => {
  expect(() => new RomanNumber(0.1)).toThrow("invalid input");
});

test("returns correctly for input value = NaN", () => {
  expect(() => new RomanNumber(NaN)).toThrow("invalid input");
});

test("returns correctly for input value = Infinity", () => {
  expect(() => new RomanNumber(Infinity)).toThrow("invalid input");
});

test("returns correctly for input value = CD1X", () => {
  expect(() => new RomanNumber("CD1X")).toThrow("invalid input");
});

test("returns correctly for input value = error", () => {
  expect(() => new RomanNumber("error")).toThrow("invalid input");
});

test("returns correctly for input value = MMMMCMXCIX", () => {
  expect(() => new RomanNumber("MMMMCMXCIX")).toThrow("invalid input");
});

test("returns correctly for input value = MMMMDMXCIX", () => {
  expect(() => new RomanNumber("MMMMDMXCIX")).toThrow("invalid input");
});

test("returns correctly for input value = 1", () => {
  const n = new RomanNumber(1);
  expect(n.toInt()).toEqual(1);
  expect(n.toString()).toEqual("I");
});

test("returns correctly for input value = 3", () => {
  const n = new RomanNumber(3);
  expect(n.toInt()).toEqual(3);
  expect(n.toString()).toEqual("III");
});

test("returns correctly for input value = 4", () => {
  const n = new RomanNumber(4);
  expect(n.toInt()).toEqual(4);
  expect(n.toString()).toEqual("IV");
});

test("returns correctly for input value = 5", () => {
  const n = new RomanNumber(5);
  expect(n.toInt()).toEqual(5);
  expect(n.toString()).toEqual("V");
});

test("returns correctly for input value = I", () => {
  const n = new RomanNumber("I");
  expect(n.toInt()).toEqual(1);
  expect(n.toString()).toEqual("I");
});

test("returns correctly for input value = III", () => {
  const n = new RomanNumber("III");
  expect(n.toInt()).toEqual(3);
  expect(n.toString()).toEqual("III");
});

test("returns correctly for input value = IIII", () => {
  expect(() => new RomanNumber("IIII")).toThrow("invalid input");
});

test("returns correctly for input value = IV", () => {
  const n = new RomanNumber("IV");
  expect(n.toInt()).toEqual(4);
  expect(n.toString()).toEqual("IV");
});

test("returns correctly for input value = V", () => {
  const n = new RomanNumber("V");
  expect(n.toInt()).toEqual(5);
  expect(n.toString()).toEqual("V");
});

test("returns correctly for input value = 1968", () => {
  const n = new RomanNumber(1968);
  expect(n.toInt()).toEqual(1968);
  expect(n.toString()).toEqual("MCMLXVIII");
});

test("returns correctly for input value = 1473", () => {
  const n = new RomanNumber(1473);
  expect(n.toInt()).toEqual(1473);
  expect(n.toString()).toEqual("MCDLXXIII");
});

test("returns correctly for input value = 2999", () => {
  const n = new RomanNumber(2999);
  expect(n.toInt()).toEqual(2999);
  expect(n.toString()).toEqual("MMCMXCIX");
});

test("returns correctly for input value = 3000", () => {
  const n = new RomanNumber(3000);
  expect(n.toInt()).toEqual(3000);
  expect(n.toString()).toEqual("MMM");
});

test("returns correctly for input value = 10000", () => {
  expect(() => new RomanNumber(10000)).toThrow("invalid range");
});

test("returns correctly for input value = CDXXIX", () => {
  const n = new RomanNumber("CDXXIX");
  expect(n.toInt()).toEqual(429);
  expect(n.toString()).toEqual("CDXXIX");
});

test("returns correctly for input value = MCDLXXXII", () => {
  const n = new RomanNumber("MCDLXXXII");
  expect(n.toInt()).toEqual(1482);
  expect(n.toString()).toEqual("MCDLXXXII");
});

test("returns correctly for input value = MCMLXXX", () => {
  const n = new RomanNumber("MCMLXXX");
  expect(n.toInt()).toEqual(1980);
  expect(n.toString()).toEqual("MCMLXXX");
});
