// CONSTATNS
const UPPER_A = 65; // ASCII - A
const UPPER_Z = 90; // ASCII - Z
const LOWER_A = 97; // ASCII - a
const LOWER_Z = 122; // ASCII - z
const ALPHABET_SIZE = 26;

function processLetter(code, baseCode, shift) {
  // the original char code minus 65/97...
  // i.e the original letter to be shifted is "b" is 98
  //  so the calc here is 98 - 97 = 1
  const normalizedCode = code - baseCode;
  // if the shifted nuber is 2 for example
  // we want to get "d"
  // shifted code = (1 + 2) % 26 = --> 3
  const shiftedCode = (normalizedCode + shift) % ALPHABET_SIZE;
  // Here we use the fromCharCode func
  // it returns the approp char from utf number
  // 3 + 97 = 100
  // 100 = "d"✔️
  return String.fromCharCode(shiftedCode + baseCode);
}

function caesarCipherSimple(str, shift) {
  return (
    str
      //takes a string and divide it into individale chars in an array
      // guy --> ["g", "u", "y"]
      .split("")
      // excute an action on each element
      .map((char) => {
        // gets the number code of the char
        // i.e "b" --> 98
        const code = char.charCodeAt(0);

        // in the bound of Capital Letters
        // speacial characters won't take into account!
        if (code >= UPPER_A && code <= UPPER_Z) {
          // i.e the letter "B"
          // pass (66, 65, 3)
          return processLetter(code, UPPER_A, shift);
        }

        if (code >= LOWER_A && code <= LOWER_Z) {
          return processLetter(code, LOWER_A, shift);
        }

        return char;
      })
      .join("")
  );
}

module.exports = caesarCipherSimple;
