import { CSSObject, Theme } from '@emotion/react';

const wrap: CSSObject = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: '51px 226px 80px 100px',
};

const mWrap = ({
  color: {
    gray: { gray150 },
  },
}: Theme): CSSObject => ({
  background: gray150,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '40px 0',
});

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
    weight: { medium },
    size: { label2 },
  },
}: Theme): CSSObject => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '0 60px',

  '> div': {
    display: 'flex',
    flexDirection: 'row',
    gap: '40px',

    '> a': {
      color: gray1000,
      cursor: 'pointer',
      fontWeight: medium,
      fontSize: label2,
      textDecoration: 'none',
      height: 'max-content',

      ':hover': {
        textDecoration: 'underline',
      },
    },
  },
});

const mCopyrightText = ({
  color: {
    gray: { gray700 },
  },
}: Theme): CSSObject => ({
  fontSize: '10px',
  color: gray700,
});

const mGuideText = ({
  color: {
    gray: { gray770 },
  },
}: Theme): CSSObject => ({
  fontSize: '13px',
  lineHeight: '20.8px',
  fontWeight: 500,
  color: gray770,
  textAlign: 'center',
  marginBottom: '16px',
});

const mBtn = ({
  color: {
    gray: { gray800 },
  },
}: Theme): CSSObject => ({
  fontSize: '12px',
  lineHeight: '14.4px',
  fontWeight: 600,
  color: gray800,
  textAlign: 'center',
  marginBottom: '50px',
  textDecoration: 'underline',
});

export { wrap, mWrap, text, linkWrap, mCopyrightText, mGuideText, mBtn };
