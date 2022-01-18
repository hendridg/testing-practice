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

module.exports = { stringLength };
