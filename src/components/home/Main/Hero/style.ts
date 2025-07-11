import { CSSObject, Theme } from '@emotion/react';

const wrap: CSSObject = {
  flexDirection: 'column',
  paddingLeft: '202px',
};

const mWrap: CSSObject = {
  flexDirection: 'column',
  alignItems: 'center',
};

const title = (theme: Theme): CSSObject => ({
  fontSize: '45px',
  fontWeight: theme.typography.weight.bold,
  lineHeight: '1.3',
  color: '#272727',
  margin: '110px 0 42px 0',
});

const mTitle = (theme: Theme): CSSObject => ({
  fontSize: '24px',
  fontWeight: theme.typography.weight.bold,
  lineHeight: '33.6px',
  color: '#272727',
  margin: '80px 0 40px 0',
});

const videoStyle: CSSObject = { width: '100%', maxWidth: '907px', marginBottom: '128px' };

const mVideoStyle: CSSObject = { width: '100%', maxWidth: '335px', marginBottom: '80px' };

export { wrap, mWrap, title, mTitle, videoStyle, mVideoStyle };
