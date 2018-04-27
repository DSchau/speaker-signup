import { idx } from '..';

const getObject = () => ({
  a: {
    b: {
      c: {
        d: true,
      },
    },
  },
});

test('it allows for deeply nested value access', () => {
  const d = idx(getObject(), _ => _.a.b.c.d);

  expect(d).toBe(true);
});

test('it does not throw on undefined/null/etc.', () => {
  const result = idx(
    getObject(),
    _ => _.a.b.c.d.e.f.g.h.i.j.ohmygodyougettheidea
  );

  expect(result).toBe(undefined);
});

test('it allows for a fallback', () => {
  const fallback = 'sup';
  const result = idx(
    getObject(),
    _ => _.a.b.c.d.e.f.g.h.i.j.ohmygodyougettheidea,
    fallback
  );

  expect(result).toBe(fallback);
});
