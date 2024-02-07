import { CSSObject, Theme } from '@emotion/react';

const wrap = ({ grids: { layout4 } }: Theme): CSSObject => ({
  ...layout4,
  alignItems: 'flex-start',
});

const title = ({
  color: {
    gray: { gray900 },
  },
  typography: {
    size: { title1 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  fontSize: title1,
  color: gray900,
  lineHeight: 1.3,
  fontWeight: bold,
  margin: '80px 0 60px',
});

const pageTitle = ({
  color: {
    gray: { gray900 },
  },
  typography: {
    size: { title5 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  margin: '0 0 30px',
  '> p': {
    paddingTop: '3px',
    fontSize: title5,
    color: gray900,
    lineHeight: 1.3,
    fontWeight: bold,
  },
});

const profileWrap = ({
  color: {
    gray: { gray1000, gray0, gray300 },
  },
}: Theme): CSSObject => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  width: '130px',
  height: '130px',
  background: gray1000,
  marginBottom: '30px',
  '> button': {
    position: 'absolute',
    background: gray0,
    borderRadius: '50%',
    cursor: 'pointer',
    width: '36px',
    height: '36px',
    border: `2px solid ${gray300}`,
    right: '-4px',
    bottom: '16px',
  },
});

const inputTitle = ({
  color: {
    gray: { gray1000 },
  },
  typography: {
    size: { title6 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  color: gray1000,
  fontSize: title6,
  fontWeight: bold,
  lineHeight: 1.3,
  margin: '0 0 14px',
});

const rows: CSSObject = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
};

const optionRows = ({
  color: {
    gray: { gray1000, gray600 },
  },
  typography: {
    size: { title6, label5 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  ...rows,
  alignItems: 'center',
  width: '100%',
  marginBottom: '60px',
  'div:nth-of-type(1)': {
    width: '55%',
  },
  'div:nth-of-type(2)': {
    flex: 1,
  },
  '> div > p': {
    color: gray1000,
    fontSize: title6,
    fontWeight: bold,
    lineHeight: 1.3,
  },
  '> div > span': {
    paddingTop: '8px',
    fontSize: label5,
    color: gray600,
  },
});

const optionTitle = ({
  color: {
    gray: { gray1000 },
  },
  typography: {
    size: { label1 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  marginLeft: '4px',
  paddingTop: '2px',
  fontSize: label1,
  fontWeight: bold,
  lineHeight: 1.2,
  color: gray1000,
});

const actionButton = ({
  typography: {
    size: { label1 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  width: '100%',
  borderRadius: '60px',
  height: '66px',
  fontSize: label1,
  fontWeight: bold,
});

const withdrawButton = ({
  color: {
    gray: { gray1000 },
  },
  typography: {
    size: { label2 },
    weight: { medium },
  },
}: Theme): CSSObject => ({
  color: gray1000,
  fontSize: label2,
  fontWeight: medium,
  lineHeight: 1.2,
  textDecoration: 'underline',
  margin: '0 auto 100px auto',
});

export { wrap, title, pageTitle, profileWrap, inputTitle, optionRows, rows, optionTitle, actionButton, withdrawButton };
