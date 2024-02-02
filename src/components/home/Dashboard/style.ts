import { CSSObject, Theme } from '@emotion/react';

const wrap: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '100px',
  margin: '0 100px',
};

const title = ({
  typography: {
    size: { title5 },
    weight: { bold },
  },
  color: {
    gray: { gray1000 },
  },
}: Theme): CSSObject => ({
  color: gray1000,
  fontSize: title5,
  fontWeight: bold,
  lineHeight: 1.3,
  marginBottom: '28px',
});

export { wrap, title };
