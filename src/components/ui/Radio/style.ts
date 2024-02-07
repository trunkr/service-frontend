import { CSSObject } from '@emotion/react';

const wrap: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '14px',
  lineHeight: '15px',
  '> input': {
    display: 'none',
    appearance: 'none',
  },
};

export { wrap };
