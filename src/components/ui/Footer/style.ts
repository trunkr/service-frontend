import { CSSObject, Theme } from '@emotion/react';

const wrap: CSSObject = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: '51px 226px 80px 100px',
};

const text = ({
  typography: {
    size: { label4 },
    weight: { semibold },
  },
}: Theme): CSSObject => ({
  marginTop: '31px',
  color: '#565656',
  fontSize: label4,
  fontWeight: semibold,
});

const linkWrap = ({
  color: {
    gray: { gray1000 },
  },
  typography: {
    weight: { bold },
    size: { label2 },
  },
}: Theme): CSSObject => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '0 155px',
  '> a': {
    color: gray1000,
    cursor: 'pointer',
    fontWeight: bold,
    fontSize: label2,
    ':hover': {
      textDecoration: 'underline',
    },
  },
});

export { wrap, text, linkWrap };
