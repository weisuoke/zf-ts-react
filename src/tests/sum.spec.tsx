// eslint-disable-next-line @typescript-eslint/no-var-requires
const math = require('../sum');

test('1+1=2', () => {
  expect(math.sum(1, 1)).toBe(2);
});

test('1+1=2', () => {
  expect(math.sum(1, -1)).toBe(0);
});
