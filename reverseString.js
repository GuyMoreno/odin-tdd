const reverseString = function (string) {
  if (!string) return "";
  return string.split("").reverse().join("");
};
// let str = "Python";
// console.log(reverseString(str));

module.exports = reverseString;
