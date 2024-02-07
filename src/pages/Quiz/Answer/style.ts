import { Theme, CSSObject } from '@emotion/react';

const wrap = ({ grids: { layout2 } }: Theme): CSSObject => ({
  ...layout2,
});
const title = ({
  color: {
    primary: { mint600 },
  },
  typography: {
    size: { label4 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  margin: '100px 0 16px',
  color: mint600,
  lineHeight: 1.2,
  fontSize: label4,
  fontWeight: bold,
});

const quizTitle = ({
  typography: {
    size: { title1 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  fontSize: title1,
  fontWeight: bold,
  lineHeight: 1.3,
  maxWidth: '501px',
  textAlign: 'center',
  margin: '90px 0 60px',
  wordBreak: 'keep-all',
});

const optionWrap = ({
  color: {
    gray: { gray800 },
  },
  typography: {
    size: { label4 },
    weight: { medium },
  },
}: Theme): CSSObject => ({
  display: 'flex',
  '> p': {
    fontSize: label4,
    fontWeight: medium,
    lineHeight: 1.2,
    color: gray800,
  },
});

const btnStyle = ({
  typography: {
    size: { label1 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  margin: '60px 0 100px 0',
  borderRadius: '10px',
  width: '400px',
  height: '66px',
  fontSize: label1,
  fontWeight: bold,
});

const loadingWrap = ({
  color: {
    gray: { gray1000 },
  },
  typography: {
    size: { title4 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  color: gray1000,
  fontSize: title4,
  fontWeight: bold,
  lineHeight: 1.5,
  textAlign: 'center',
  marginTop: '40px',
});

export { wrap, title, quizTitle, optionWrap, btnStyle, loadingWrap };
