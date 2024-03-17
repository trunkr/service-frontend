import { CSSObject, Theme } from '@emotion/react';

const wrap = ({
  color: {
    gray: { gray250 },
  },
}: Theme): CSSObject => ({
  border: `2px solid ${gray250}`,
  padding: '24px',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '290px',
  height: '157px',
  gap: 'none',
});

const title = ({
  color: {
    gray: { gray1000 },
  },
  typography: {
    size: { title7 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  fontSize: title7,
  lineHeight: '1.5',
  fontWeight: bold,
  color: gray1000,
});

const statusLabel =
  (isCorrect: boolean) =>
  ({
    color: {
      primary: { mint800, mint200 },
      error: { red850, red200 },
    },
    typography: {
      size: { label6 },
      weight: { bold },
    },
  }: Theme): CSSObject => ({
    padding: '6px 10px 3px 10px',
    width: 'fit-content',
    lineHeight: '1.2',
    fontSize: label6,
    fontWeight: bold,
    background: isCorrect ? mint200 : red200,
    color: isCorrect ? mint800 : red850,
    borderRadius: '4px',
    marginBottom: '10px',
  });

const moreButton = ({
  color: {
    gray: { gray1000 },
  },
  typography: {
    size: { label4 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  border: `2px solid ${gray1000}`,
  width: '128px',
  height: '40px',
  borderRadius: '44px',
  fontWeight: bold,
  fontSize: label4,
});

export { wrap, title, statusLabel, moreButton };
