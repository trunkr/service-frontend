import { Theme, CSSObject } from '@emotion/react';

const wrap = ({ grids: { layout2 } }: Theme): CSSObject => ({
  ...layout2,
});

export { wrap };
