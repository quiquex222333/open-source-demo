const { sum, calculateDiscount } = require('../src/calculator.js');

test('should sum two numbers correctly', () => {
  expect(sum(2, 3)).toBe(5);
});

test('should calculate discount correctly', () => {
  expect(calculateDiscount(100, 20)).toBe(80);
});
