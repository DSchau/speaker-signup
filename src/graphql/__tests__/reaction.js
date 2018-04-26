import { GET_REACTION_MUTATION } from '..';

test('it handles add reaction', () => {
  const mutation = GET_REACTION_MUTATION('add');

  ['AddReactionToIssue', 'addReaction'].forEach(part => {
    expect(mutation).toMatch(part);
  });
});

test('it handles remove reaction', () => {
  const mutation = GET_REACTION_MUTATION('remove');

  ['RemoveReactionToIssue', 'removeReaction'].forEach(part => {
    expect(mutation).toMatch(part);
  });
});
