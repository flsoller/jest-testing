const capitalizeFirstLetter = (string) => {
  // Get first letter of input and set upper case
  let firstLetter = string.charAt(0).toUpperCase();

  // Slice the first letter from input
  let inputStringSliced = string.slice(1, string.length);

  // Concatenate
  let result = firstLetter + inputStringSliced;

  return result;
};

module.exports = capitalizeFirstLetter;
