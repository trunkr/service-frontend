import { CSSObject, Theme } from '@emotion/react';

const wrap = ({ grids: { layout3 } }: Theme): CSSObject => ({
  ...layout3,
  alignItems: 'flex-start',
  marginBottom: '180px',
});

export { wrap };
