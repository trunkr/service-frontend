import { CSSObject, Theme } from '@emotion/react';

const title = ({
  color: {
    gray: { gray900 },
  },
  typography: {
    size: { label1 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  fontSize: label1,
  color: gray900,
  fontWeight: bold,
  lineHeight: 1.2,
  margin: '17px 0 6px',
});

const subTitle = ({
  color: {
    gray: { gray900, gray700 },
  },
  typography: {
    size: { label7 },
    weight: { medium },
  },
}: Theme): CSSObject => ({
  fontSize: label7,
  color: gray900,
  lineHeight: 1.2,
  fontWeight: medium,
  '> span': {
    color: gray700,
  },
});

export { title, subTitle };
