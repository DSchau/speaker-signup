import React from 'react';
import { render, Simulate } from 'react-testing-library';
import 'dom-testing-library/extend-expect';

import { Plus } from '../plus';

test('it renders an svg', () => {
  const { container } = render(<Plus />);

  expect(container.querySelectorAll('svg').length).toBe(1);
});
