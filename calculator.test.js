const calculator = require("./calculator");

test("add 1 + 2 to equal 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("add -1 + 1 should be 0", () => {
  expect(calculator.add(-1, 1)).toBe(0);
});

// multiply

test("multiply -2 * 3 should be -6", () => {
  expect(calculator.multiply(-2, 3)).toBe(-6);
});

// divide

test("divide 10 / 2 should be 5", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("divide by zero should throw error", () => {
  expect(() => calculator.divide(10, 0)).toThrow("Cannot divide by zero");
});

test("divide -10 / 2 should be -5", () => {
  expect(calculator.divide(-10, 2)).toBe(-5);
});

test('divide "10" / 2 should throw error', () => {
  expect(() => calculator.divide("10", 2)).toThrow();
});

test("divide 0 / 5 should be 0", () => {
  expect(calculator.divide(0, 5)).toBe(0);
});

test("divide 10 / null should throw error", () => {
  expect(() => calculator.divide(10, null)).toThrow(
    "Both arguments must be numbers"
  );
});
