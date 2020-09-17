// Testing for first letter to be capitalized.
const capitalFirstLetter = require('./capitalizeLetter');

test('Returns string with first letter capitalized', () => {
  expect(capitalFirstLetter('hello')).toBe('Hello');
  expect(capitalFirstLetter('HELLO there')).toBe('HELLO there');
});

// Testing for reversed string.
const reverseString = require('./reverseString');

test('Reverses a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

// Testing calculator object functions.
const calculator = require('./calculator');

test('Test calculator addition', () => {
  expect(calculator.add(5, 5)).toBe(10);
});
test('Test calculator subtraction', () => {
  expect(calculator.subtract(10, 5)).toBe(5);
});
test('Test calculator multiplication', () => {
  expect(calculator.multiply(10, 5)).toBe(50);
});
test('Test calculator division', () => {
  expect(calculator.divide(10, 5)).toBe(2);
});
