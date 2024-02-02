import { CSSObject, Theme } from '@emotion/react';
import { SizeType } from 'types';

const wrap =
  (invalid: boolean, size: SizeType) =>
  ({
    color: {
      gray: { gray1000, gray250, gray150 },
      error: { red600 },
    },
    typography: {
      size: { label1, label4 },
      weight: { semibold },
    },
  }: Theme): CSSObject => ({
    position: 'relative',
    width: '100%',
    '> button': {
      position: 'absolute',
      right: 0,
    },
    '> input': {
      boxSizing: 'border-box',
      outline: 'none',
      border: `2px solid ${invalid ? red600 : gray250}`,
      padding: size === 'large' ? '22px 26px' : '20px 14px',
      width: '100%',
      borderRadius: '10px',
      fontWeight: semibold,
      fontSize: label1,
      ':focus': {
        border: `2px solid ${invalid ? red600 : gray1000}`,
      },
      ':disabled': {
        background: gray150,
        border: `2px solid ${gray250}`,
      },
    },
    '> p': {
      marginTop: '10px',
      fontSize: label4,
      fontWeight: semibold,
      color: red600,
      lineHeight: '1.2',
      height: '17px',
    },
  });

export { wrap };
