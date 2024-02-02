import { CSSObject } from '@emotion/react';
import icOnCircle from 'static/icons/system/ic_check_circle_on.svg';
import icOffCircle from 'static/icons/system/ic_check_circle_off.svg';
import icOnRect from 'static/icons/system/ic_check_rect_on.svg';
import icOffRect from 'static/icons/system/ic_check_rect_off.svg';

export type CheckBoxUiType = 'rect' | 'circle';

const checkbox = (type: CheckBoxUiType): CSSObject => ({
  display: 'flex',
  alignItems: 'center',
  lineHeight: '19px',
  fontSize: '18px',
  '> input': {
    appearance: 'none',
    width: '26px',
    height: '26px',
    margin: '0 4px 0 0',
    background: `url(${type === 'circle' ? icOffCircle : icOffRect}) no-repeat`,
    outline: 'none',

    ':not([disabled])': {
      cursor: 'pointer',
    },

    ':checked': {
      background: `url(${type === 'circle' ? icOnCircle : icOnRect}) no-repeat`,
    },
  },
});

export { checkbox };
