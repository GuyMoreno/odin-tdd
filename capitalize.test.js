const capitalize = require("./capitalize");

test("Capitalize first letter", () => {
  expect(capitalize("dog")).toBe("Dog");
});

test("capitalize empty string", () => {
  expect(capitalize("")).toBe("");
});

test("capitalize single letter", () => {
  expect(capitalize("a")).toBe("A");
});

test("capitalize already capitalized", () => {
  expect(capitalize("Cat")).toBe("Cat");
});

test("capitalize word starting with number", () => {
  expect(capitalize("1dog")).toBe("1dog"); 
});
