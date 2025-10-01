// analyzeArray.test.js
const analyzeArray = require("./analyzeArray");

test("1. should return the correct length of the array", () => {
  const arr = [1, 8, 3, 4, 2, 6];

  expect(analyzeArray(arr)).toEqual({ length: 6, min: 1, max: 8, average: 4 });
});

test("Cheking edge cases", () => {
  const arr = [];

  expect(analyzeArray(arr)).toEqual({
    length: 0,
    min: undefined,
    max: undefined,
    average: NaN,
  });
});

test("5. should ignore non-numeric elements and calculate correctly", () => {
  const arr = [1, "skip", 8, 3, "hello", 4, 2, 6];

  // המספרים בלבד: [1, 8, 3, 4, 2, 6]. סכום: 24. אורך אפקטיבי: 6.
  expect(analyzeArray(arr)).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6, // האורך הוא 6 כי התעלמנו מהמחרוזות
  });
});
