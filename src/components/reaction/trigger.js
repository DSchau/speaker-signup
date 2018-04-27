import React from 'react';
import styled from 'react-emotion';

import { Plus } from './plus';
import { Smiley } from './smiley';

const Button = styled.button({
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
  fill: '#586069',
  cursor: 'pointer',
  ':hover': {
    fill: '#0366d6',
  },
});

export function Trigger(props) {
  return (
    <Button aria-label="Reaction popup trigger" {...props}>
      <Plus />
      <Smiley />
    </Button>
  );
}
