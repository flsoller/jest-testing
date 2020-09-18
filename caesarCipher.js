const encryption = (input) => {
  //turns input into array
  let inputString = input.split('');

  //turns each character into asci code
  const arrayToAsci = inputString.map((char) => {
    return char.charCodeAt();
  });

  //upshift each index by one. Account for 'Z','z' and '.'
  const cipheredArray = arrayToAsci.map((num) => {
    // if num is 90 (Z) turn it to 65 (A)
    return num === 90
      ? 65
      : // if num is 122 (z) turn it to 97 (a)
      num === 122
      ? 97
      : // if num is 46 (.) do nothing
      num === 46
      ? 46
      : // otherwise increment by 1
        (num += 1);
  });

  //turn asci into character
  const encryptedArray = cipheredArray.map((num) => {
    return String.fromCharCode(num);
  });

  //concatenate into string and return.
  return encryptedArray.join('');
};

module.exports = encryption;
