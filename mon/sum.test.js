// sum.test.js

// Import the function (if it’s in another file)
const sum = (a, b) => {
  let c = a + b;
  return c;
};
 
describe('sum function', () => {
  test('should return the correct sum of two positive numbers', () => {
    expect(sum(1, 1)).toBe(2);
  });

  test('should handle zero correctly', () => {
    expect(sum(0, 5)).toBe(5);
    expect(sum(5, 0)).toBe(5);
  });

  test('should handle negative numbers', () => {
    expect(sum(-2, -3)).toBe(-5);
    expect(sum(-2, 3)).toBe(1);
  });

  test('should handle floating-point numbers', () => {
    expect(sum(1.2, 2.3)).toBeCloseTo(3.5);
  });
});
