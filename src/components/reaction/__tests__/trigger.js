import React from 'react';
import { render, Simulate } from 'react-testing-library';
import 'dom-testing-library/extend-expect';

import { Trigger } from '../trigger';

test('it renders within a button', () => {
  const { container } = render(<Trigger />);

  const button = container.querySelector('button');

  expect(button).not.toBeNull();
  expect(button.querySelectorAll('svg').length).toBe(2);
});

test('it renders both smiley and plus', () => {
  const { container } = render(<Trigger />);

  expect(container.querySelectorAll('svg').length).toBe(2);
});
