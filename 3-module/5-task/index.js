const REGEX = /,| /;

function getMinMax(str) {
  let numbersFromStr = str
    .split(REGEX)
    .filter(item => { return isFinite(item) });

  return {
    min: Math.min(...numbersFromStr),
    max: Math.max(...numbersFromStr)
  }
}
