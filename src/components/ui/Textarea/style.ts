import { CSSObject, Theme } from '@emotion/react';
const wrap = ({
  color: {
    gray: { gray1000, gray250 },
  },
  typography: {
    size: { body1 },
    weight: { medium },
  },
}: Theme): CSSObject => ({
  width: '100%',
  '> textarea': {
    boxSizing: 'border-box',
    outline: 'none',
    border: `2px solid ${gray250}`,
    resize: 'none',
    // minHeight: '200px',
    height: '440px',
    borderRadius: '10px',
    padding: '30px',
    lineHeight: 1.7,
    fontSize: body1,
    fontWeight: medium,
    ':focus': {
      border: `2px solid ${gray1000}`,
    },
  },
});

const maxLenStyle = ({
  color: {
    gray: { gray600 },
  },
  typography: {
    size: { label4 },
    weight: { medium },
  },
}: Theme): CSSObject => ({
  lineHeight: 1.2,
  fontSize: label4,
  fontWeight: medium,
  color: gray600,
});

const bottomWrap: CSSObject = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '10px',
};

export { wrap, maxLenStyle, bottomWrap };
