import React from 'react';
import { render, Simulate } from 'react-testing-library';
import 'dom-testing-library/extend-expect';

import { Smiley } from '../smiley';

test('it renders an svg', () => {
  const { container } = render(<Smiley />);

  expect(container.querySelectorAll('svg').length).toBe(1);
});
