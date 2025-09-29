const caesarCipher = require("./caesarCipher");

test("add 1 + 2 to equal 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("simple shift: xyz + 3 should be abc", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("case preservation: HeLLo + 3 should be KhOOr", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("punctuation preserved: Hello, World! + 3", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
