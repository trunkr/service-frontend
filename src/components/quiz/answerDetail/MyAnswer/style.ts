import { CSSObject, Theme } from '@emotion/react';

const subTitle = ({
  color: {
    gray: { gray1000 },
  },
  typography: {
    size: { title5 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  color: gray1000,
  fontSize: title5,
  fontWeight: bold,
  lineHeight: 1.4,
  marginRight: '10px',
});

const answerLabel = ({
  color: {
    error: { red200, red850 },
  },
  typography: {
    size: { label6 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  fontSize: label6,
  fontWeight: bold,
  color: red850,
  backgroundColor: red200,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '26px',
  padding: '0 10px',
  borderRadius: '6px',
});

const user = ({
  color: {
    gray: { gray1000 },
  },
}: Theme): CSSObject => ({
  background: gray1000,
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  marginRight: '10px',
  '> img': {
    width: '12.27px',
  },
});

const nickname = ({
  color: {
    gray: { gray600, gray1000 },
  },
  typography: {
    size: { label1 },
    weight: { medium, bold },
  },
}: Theme): CSSObject => ({
  fontSize: label1,
  fontWeight: bold,
  color: gray1000,
  marginBottom: '2px',

  '& > span:last-of-type': {
    fontWeight: medium,
    color: gray600,
    marginLeft: '2px',
  },
});

const date = ({
  color: {
    gray: { gray400 },
  },
  typography: {
    size: { label5 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  fontSize: label5,
  fontWeight: bold,
  color: gray400,
});

const answer = ({
  color: {
    gray: { gray900 },
  },
  typography: {
    size: { body2 },
    weight: { medium },
  },
}: Theme): CSSObject => ({
  fontSize: body2,
  fontWeight: medium,
  color: gray900,
  lineHeight: 1.7,
  marginBottom: '30px',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-all',
});

export { subTitle, answerLabel, user, nickname, date, answer };
