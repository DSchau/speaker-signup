jest.mock('emotion', () => ({
  injectGlobal: jest.fn(),
}));
import { injectGlobal } from 'emotion';

const getGlobal = () => {
  delete require.cache[require.resolve('../global')];
  return require('../global');
};

test('it calls injectGlobal', () => {
  getGlobal();

  expect(injectGlobal).toHaveBeenCalledTimes(1);
});
