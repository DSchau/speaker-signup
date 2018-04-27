import React from 'react';
import {
  cleanup,
  render,
  renderIntoDocument,
  Simulate,
  wait,
} from 'react-testing-library';
import 'dom-testing-library/extend-expect';

import { ApolloProvider } from 'react-apollo';

import { Reaction } from '../reaction';
import { getClient } from '../../../client';

afterEach(cleanup);

const getProps = (props = {}) => ({
  ...props,
});

const withApollo = component => {
  const client = getClient();
  return <ApolloProvider client={client}>{component}</ApolloProvider>;
};

test('it renders children', () => {
  const props = getProps();

  const { container } = render(
    withApollo(
      <Reaction {...props}>
        <h1 data-test-id="sample">Sup</h1>
      </Reaction>
    )
  );

  const sample = container.querySelector('[data-test-id="sample"]');

  expect(sample).not.toBeNull();
});

test.skip('it pops open pop up', async () => {
  const props = getProps();

  const { container, getByText } = renderIntoDocument(
    withApollo(<Reaction {...props} />)
  );

  const trigger = container.querySelector('[data-test-id="reaction-trigger"]');

  Simulate.click(trigger);
});
