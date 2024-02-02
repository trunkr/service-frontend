import { CSSObject } from '@emotion/react';
import icOn from 'static/icons/system/ic_radio_on.svg';
import icOff from 'static/icons/system/ic_radio_off.svg';

const wrap: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '14px',
  lineHeight: '15px',
  '> input': {
    appearance: 'none',
    background: `url(${icOff}) !important`,
    width: 24,
    height: 24,
    margin: '0 4px 0 0',
    ':checked': {
      background: `url(${icOn}) !important`,
    },
  },
};

export { wrap };
