import React from 'react';
import styled from 'react-emotion';
import GoMarkGithub from 'react-icons/lib/go/mark-github';

const Container = styled.div({
  position: 'fixed',
  bottom: 0,
  right: 0,
  padding: 8,
  backgroundColor: 'white',
  zIndex: 2,
});

const Link = styled.a({
  textDecoration: 'none',
  color: 'inherit',
  color: '#333',
  transition: '175ms ease-in-out',
  ':hover': {
    color: '#4078c0',
  },
});

const GithubIcon = styled(GoMarkGithub)({
  height: 24,
  width: 24,
});

export function GithubLink(props) {
  return (
    <Container {...props}>
      <Link
        href="https://github.com/dschau/speaker-signup"
        target="_blank"
        rel="noopener"
      >
        <GithubIcon />
      </Link>
    </Container>
  );
}
