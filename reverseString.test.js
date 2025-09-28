const reverseString = require("./reverseString");

test("regular reverse", () => {
  expect(reverseString("dog")).toBe("god");
});

test("reverse empty string", () => {
  expect(reverseString(" ")).toBe(" ");
});

test("reverse single letter", () => {
  expect(reverseString("a")).toBe("a");
});

test("reverse palindrome", () => {
  expect(reverseString("madam")).toBe("madam");
});

test("reverse string with spaces", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

test("reverse null should return empty string", () => {
  expect(reverseString(null)).toBe("");
});
test("reverse undefined should return empty string", () => {
  expect(reverseString(undefined)).toBe("");
});
