import { CSSObject, Theme } from '@emotion/react';

const title = (theme: Theme): CSSObject => ({
  fontSize: '45px',
  fontWeight: theme.typography.weight.bold,
  lineHeight: '1.3',
  color: '#272727',
  margin: '110px 0 42px 0',
});

export { title };
