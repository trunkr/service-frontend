import { CSSObject } from '@emotion/react';

const toggle = (): CSSObject => ({
  display: 'flex',
  alignItems: 'center',
  '> input': {
    appearance: 'none',
    display: 'none',
  },
});

export { toggle };
