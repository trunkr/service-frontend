import { CSSObject, Theme } from '@emotion/react';

const wrap = ({
  color: {
    gray: { gray250 },
  },
  typography: {
    size: { title6 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  border: `2px solid ${gray250}`,
  width: '100%',
  marginBottom: '20px',
  padding: '27px 30px',
  fontSize: title6,
  fontWeight: bold,
  borderRadius: '10px',
  cursor: 'pointer',
  ':hover': {
    background: 'rgba(0,0,0,0.05)',
  },
});

const labelStyle =
  (isCorrect: boolean) =>
  ({
    color: {
      error: { red200, red850 },
      primary: { mint200, mint800 },
    },
    typography: {
      size: { label5 },
      weight: { bold },
    },
  }: Theme): CSSObject => ({
    display: 'flex',
    alignItems: 'center',
    padding: '6px 10px',
    borderRadius: '4px',
    background: isCorrect ? mint200 : red200,
    color: isCorrect ? mint800 : red850,
    marginRight: '16px',
    fontSize: label5,
    fontWeight: bold,
  });

export { wrap, labelStyle };
