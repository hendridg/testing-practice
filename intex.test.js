const { sum } = require('./index.js');

test('should be print 5', () => {
  expect(sum(2, 3)).toBe(5);
});
