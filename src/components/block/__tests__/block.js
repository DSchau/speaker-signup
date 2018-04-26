import React from 'react';
import { render } from 'react-testing-library';
import 'dom-testing-library/extend-expect';

import { Block } from '..';

const getProps = (props = {}) => ({
  title: 'Default title',
  children: jest.fn(),
  ...props,
});

test('it renders children as function', () => {
  const props = getProps();

  render(<Block {...props} />);
  expect(props.children).toHaveBeenCalledTimes(1);
});

test('it renders title', () => {
  const title = 'Sup my b';
  const props = getProps({ title });

  const { container, queryByTestId } = render(<Block {...props} />);

  const titleEl = container.querySelector('[data-test-id="title"]');
  expect(titleEl).toHaveTextContent(title);
});
