// Analyses input array and returns object.
const analyze = (input) => {
  return {
    average: calcAverage(input),
    min: Math.min(...input),
    max: Math.max(...input),
    length: input.length,
  };
};

// Return array average.
function calcAverage(input) {
  return input.reduce((prev, curr) => prev + curr) / input.length;
}

module.exports = analyze;
