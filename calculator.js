const calculator = (function () {
  const checkNumber = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Both arguments must be numbers");
    }
  };

  const add = (a, b) => {
    checkNumber(a, b);
    return a + b;
  };

  const subtract = (a, b) => {
    checkNumber(a, b);
    return a - b;
  };

  const multiply = (a, b) => {
    checkNumber(a, b);
    return a * b;
  };

  const divide = (a, b) => {
    checkNumber(a, b);
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
  };

  return { add, subtract, multiply, divide };
})();

module.exports = calculator;
