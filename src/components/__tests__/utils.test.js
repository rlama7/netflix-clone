import { add, multiply, divide } from '../../utils/utils';

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('multiplies 4 * 5 to equal 20', () => {
  expect(multiply(4, 5)).toBe(20);
});

test('divides 10 / 5 to equal 2', () => {
  expect(divide(10, 5)).toBe(2);
});

test('returns error when dividing by zero', () => {
  expect(divide(5, 0)).toBe('Cannot divide by zero');
});
