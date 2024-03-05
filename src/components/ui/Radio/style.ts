import { CSSObject } from '@emotion/react';

const wrap: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '14px',
  fontWeight: 'bold',
  lineHeight: ' 21.6px',
  '> input': {
    display: 'none',
    appearance: 'none',
  },
  '> img': {
    marginRight: '10px',
  },
};

export { wrap };
