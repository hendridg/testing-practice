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

const capitalize = (string) => {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
};

module.exports = { stringLength, reverseString, capitalize };
