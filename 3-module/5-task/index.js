function getMinMax(str) {
  let numbersFromStr = str
    .split(/,| /)
    .filter(item => { return Number(item) });

  return {
    min: Math.min(...numbersFromStr),
    max: Math.max(...numbersFromStr)
  }
}
