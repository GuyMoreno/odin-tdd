// analyzeArray.js
function analyzeArray(arr) {
  //firstly filter the elemnets to get only numbers
  const numericArr = arr.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );

  if (numericArr.length === 0) {
    // if empty
    return { average: NaN, min: undefined, max: undefined, length: 0 };
  }

  const sum = numericArr.reduce((total, current) => total + current, 0);
  const avgVal = sum / numericArr.length;

  const minVal = Math.min(...numericArr);
  const maxVal = Math.max(...numericArr);

  return {
    average: avgVal,
    min: minVal,
    max: maxVal,
    length: numericArr.length,
  };
}

module.exports = analyzeArray;
