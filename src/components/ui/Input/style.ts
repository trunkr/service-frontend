import { CSSObject, Theme } from '@emotion/react';
import { SizeType } from 'types';

const wrap =
  (invalid: boolean, size: SizeType) =>
  ({
    color: {
      gray: { gray1000, gray250, gray150, gray350 },
      error: { red600 },
    },
    typography: {
      size: { label1 },
      weight: { semibold },
    },
  }: Theme): CSSObject => ({
    position: 'relative',
    display: 'flex',
    width: '100%',
    boxSizing: 'border-box',
    outline: 'none',
    border: `2px solid ${invalid ? red600 : gray250}`,
    padding: size === 'large' ? '22px 26px' : '20px 14px',
    borderRadius: '10px',
    '&:has(input:focus)': {
      border: `2px solid ${invalid ? red600 : gray1000}`,
    },
    '&:has(input:disabled)': {
      background: gray150,
      border: `2px solid ${gray250}`,
    },
    '> button': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '20px',
      height: '20px',
      background: gray350,
      borderRadius: '50%',
    },
    '> input': {
      flex: 1,
      outline: 'none',
      border: 'none',
      fontWeight: semibold,
      fontSize: label1,
    },
    '&:has(input:focus) > button': {
      display: 'flex',
    },
  });

const invalidMsgStyle = ({
  color: {
    error: { red600 },
  },
  typography: {
    size: { label4 },
    weight: { semibold },
  },
}: Theme): CSSObject => ({
  marginTop: '10px',
  fontSize: label4,
  fontWeight: semibold,
  color: red600,
  lineHeight: '1.2',
  height: '17px',
  alignSelf: 'flex-start',
});

export { wrap, invalidMsgStyle };
