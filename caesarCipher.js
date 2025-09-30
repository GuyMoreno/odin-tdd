// CONSTATNS
const UPPER_A = 65; // ASCII - A
const UPPER_Z = 90; // ASCII - Z
const LOWER_A = 97; // ASCII - a
const LOWER_Z = 122; // ASCII - z
const ALPHABET_SIZE = 26;

function processLetter(code, baseCode, shift) {
  // the original char code minus 65/97...
  // לדעת מה האינדקס מה האות איפה היא ביחס לראשונה
  const normalizedCode = code - baseCode;
  // 
  const shiftedCode = (normalizedCode + shift) % ALPHABET_SIZE;
  return String.fromCharCode(shiftedCode + baseCode);
}

function caesarCipherSimple(str, shift) {
  return str
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);

      // in the bound of Capital Letters
      if (code >= UPPER_A && code <= UPPER_Z) {
        return processLetter(code, UPPER_A, shift);
      }

      if (code >= LOWER_A && code <= LOWER_Z) {
        return processLetter(code, LOWER_A, shift);
      }

      return char;
    })
    .join("");
}

console.log(caesarCipherSimple("AbC", 3));

module.exports = caesarCipherSimple;
