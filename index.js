const stringLength = (string) => {
  numCharacter = string.split('').length;
  if (numCharacter < 1) {
    return 'String is empty';
  }
  if (numCharacter > 10) {
    return 'String is to long';
  }
  return numCharacter;
};

const reverseString = (string) => {
  return string.split('').reverse().join('');
};

module.exports = { stringLength, reverseString };
