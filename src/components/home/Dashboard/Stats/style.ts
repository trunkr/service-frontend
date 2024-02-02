import { CSSObject, Theme } from '@emotion/react';

const wrap = ({
  color: {
    gray: { gray200, gray600, gray750, gray1000 },
    sub: { purple750 },
  },
  typography: {
    size: { label2, number2 },
    weight: { bold, semibold },
  },
}: Theme): CSSObject => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  border: `1px solid ${gray200}`,
  marginBottom: '100px',
  borderRadius: '10px',
  '> li': {
    '> div': {
      marginBottom: '43px',
      '> p': {
        fontSize: label2,
        fontWeight: bold,
        color: gray600,
        marginBottom: '6px',
      },
      '> b': {
        fontSize: number2,
      },
    },
    padding: '40px 30px',
    '> p': {
      fontSize: label2,
      fontWeight: semibold,
      lineHeight: 1.2,
      color: gray750,
      '> span': {
        color: purple750,
      },
    },
    '> a': {
      fontSize: label2,
      fontWeight: semibold,
      color: gray1000,
    },
  },
  'li + li': {
    borderLeft: `1px solid ${gray200}`,
  },
});

export { wrap };
