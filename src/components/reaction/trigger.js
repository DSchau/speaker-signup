import React from 'react';
import styled from 'react-emotion';

import { Plus } from './plus';
import { Smiley } from './smiley';

const Container = styled.button({
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
  fill: '#586069',
  cursor: 'pointer',
  ':hover': {
    fill: '#0366d6',
  },
});

export function Trigger({ name, ...rest }) {
  return (
    <Container name={`trigger-${name}`} {...rest}>
      <Plus />
      <Smiley />
    </Container>
  );
}
