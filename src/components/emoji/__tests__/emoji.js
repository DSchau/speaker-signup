import React from 'react';
import { render, Simulate } from 'react-testing-library';
import 'dom-testing-library/extend-expect';

import { Emoji } from '..';

const getProps = (props = {}) => ({
  ariaLabel: 'An emoji reaction',
  ...props,
});

test('it renders an emoji', () => {
  const props = getProps({ name: 'CONFUSED' });

  const { container } = render(<Emoji {...props} />);

  const emoji = container.querySelector('[data-test-id="emoji"]');
  expect(emoji).toHaveTextContent('😕');
});

test('it renders an accessible emoji', () => {
  const ariaLabel = 'Confused emoji reaction';
  const props = getProps({ ariaLabel, name: 'CONFUSED' });

  const { container } = render(<Emoji {...props} />);

  const emoji = container.querySelector('[data-test-id="emoji"]');
  expect(emoji.getAttribute('aria-label')).toBe(ariaLabel);
  expect(emoji.getAttribute('role')).toBe('img');
});

test('it renders a span by default', () => {
  const props = getProps({ name: 'CONFUSED' });

  const { container } = render(<Emoji {...props} />);

  expect(container.querySelectorAll('span').length).toBeGreaterThan(1);
  expect(container.querySelectorAll('button').length).toBe(0);
});

test('it renders a button, if interactive', () => {
  const props = getProps({ name: 'CONFUSED', interactive: true });

  const { container } = render(<Emoji {...props} />);

  expect(container.querySelectorAll('button').length).toBe(1);
});

test('it adds className if specified', () => {
  const className = 'sup-nerd';
  const props = getProps({ name: 'CONFUSED', className });

  const { container } = render(<Emoji {...props} />);

  const el = container.querySelector('[data-test-id="emoji-container"]');

  expect(el.className).toContain(className);
});

test('it handles onClick', () => {
  const onClick = jest.fn();

  const props = getProps({ name: 'HOORAY', onClick });

  const { container } = render(<Emoji {...props} />);

  const el = container.querySelector('[data-test-id="emoji-container"]');

  Simulate.click(el);

  expect(onClick).toHaveBeenCalledTimes(1);
});
