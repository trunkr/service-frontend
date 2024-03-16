import { CSSObject, Theme } from '@emotion/react';

const wrap = ({
  typography: {
    size: { label2 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '30px 0',
  '> button': {
    width: '500px',
    height: '56px',
    fontSize: label2,
    fontWeight: bold,
    borderRadius: '28px',
    position: 'relative',
  },
});

const title = ({
  typography: {
    size: { title4 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  marginTop: '20px',
  display: 'flex',
  alignItems: 'center',
  '> p': {
    fontSize: title4,
    fontWeight: bold,
    lineHeight: 1.3,
    paddingTop: '7px',
  },
});

const buttonIcon: CSSObject = {
  '> img': {
    position: 'absolute',
    left: '20px',
  },
};

const kakaoButton: CSSObject = {
  background: '#FEE500',
  margin: '30px 0 12px',
  ...buttonIcon,
};

const googleButton = ({
  color: {
    gray: { gray0, gray1000 },
  },
}: Theme): CSSObject => ({
  background: gray0,
  color: gray1000,
  border: `2px solid ${gray1000}`,
  ...buttonIcon,
});

export { wrap, title, kakaoButton, googleButton };
