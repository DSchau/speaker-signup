import typography from '../typography';

test('it is the default export', () => {
  expect(typography).toBeDefined();
});

test('it matches snapshot', () => {
  expect(typography.toJSON()).toMatchSnapshot();
});
