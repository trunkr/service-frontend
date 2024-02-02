import { CSSObject } from '@emotion/react';

const toggle = (): CSSObject => ({
  display: 'flex',
  alignItems: 'center',
  lineHeight: '19px',
  fontSize: '18px',
  '> input': {
    appearance: 'none',
  },
});

export { toggle };
