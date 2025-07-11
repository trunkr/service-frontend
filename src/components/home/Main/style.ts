import { CSSObject, Theme } from '@emotion/react';

const wrap = ({
  color: {
    gray: { gray100 },
  },
}: Theme): CSSObject => ({
  '> section': {
    display: 'flex',
  },
  'section:nth-of-type(2n+1)': {
    background: gray100,
  },
});

const title = (theme: Theme): CSSObject => ({
  fontSize: '35px',
  fontWeight: theme.typography.weight.bold,
  lineHeight: '1.3',
  color: theme.color.gray.gray900,
  marginTop: '100px',
});

const subTitle = (theme: Theme): CSSObject => ({
  fontSize: theme.typography.size.title6,
  fontWeight: theme.typography.weight.semibold,
  lineHeight: '1.7',
  color: theme.color.gray.gray650,
  marginTop: '18px',
});

const mTitle = (theme: Theme): CSSObject => ({
  fontSize: '24px',
  fontWeight: theme.typography.weight.bold,
  lineHeight: '33.6px',
  color: '#272727',
  marginTop: '80px',
  textAlign: 'center',
});

const mSubTitle = (theme: Theme): CSSObject => ({
  fontSize: theme.typography.size.label4,
  fontWeight: theme.typography.weight.semibold,
  lineHeight: '22.4px',
  color: theme.color.gray.gray650,
  marginTop: '16px',
  textAlign: 'center',
});

export { wrap, title, subTitle, mTitle, mSubTitle };
