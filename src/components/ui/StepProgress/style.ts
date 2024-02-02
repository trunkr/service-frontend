import { CSSObject, Theme } from '@emotion/react';

const wrap = (total: number): CSSObject => ({
  display: 'grid',
  minWidth: '200px',
  height: '4px',
  gap: '0 4px',
  gridTemplateColumns: `repeat(${total}, 1fr)`,
  '> div': {
    borderRadius: '10px',
    height: '4px',
  },
});

const item =
  (isActive: boolean) =>
  ({
    color: {
      primary: { mint600, mint300 },
    },
  }: Theme): CSSObject => ({
    background: isActive ? mint600 : mint300,
  });

export { wrap, item };
