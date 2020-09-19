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

// Testing caesarCipher function.
const encryption = require('./caesarCipher');

test('Test ciphering of text', () => {
  expect(encryption('AAA')).toBe('BBB');
  expect(encryption('aaa')).toBe('bbb');
  expect(encryption('ZZZ')).toBe('AAA');
  expect(encryption('z.z.z')).toBe('a.a.a');
});

// Testing array analysis methods.
const analyze = require('./arrayAnalysis');

test('Return object from array', () => {
  expect(Object);
});
test('Object has keys with correct values', () => {
  expect(analyze([1, 2, 3, 4])).toStrictEqual({
    average: 2.5,
    min: 1,
    max: 4,
    length: 4,
  });
  expect(analyze([105, 210, 40, 1])).toStrictEqual({
    average: 89,
    min: 1,
    max: 210,
    length: 4,
  });
});
