import React from 'react';
import styled from 'react-emotion';

import { Emoji } from '..';

const Container = styled.div({
  display: 'flex',
});

export function ReactionsList({ list }) {
  return (
    <Container>
      {list.map((name, index) => (
        <Emoji key={`${name}-${index}`} name={name} />
      ))}
    </Container>
  );
}
