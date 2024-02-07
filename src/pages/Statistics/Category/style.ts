import { CSSObject, Theme } from '@emotion/react';

const wrap: CSSObject = {
  padding: '80px 0',
  margin: '0px 100px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const titleStyle = ({
  color: {
    gray: { gray1000 },
  },
  typography: {
    size: { title1 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  fontSize: title1,
  fontWeight: bold,
  lineHeight: 1.3,
  color: gray1000,
  marginTop: '20px',
});

const textStyle = ({
  color: {
    gray: { gray850 },
  },
  typography: {
    size: { body2 },
    weight: { medium },
  },
}: Theme): CSSObject => ({
  lineHeight: 1.5,
  fontSize: body2,
  fontWeight: medium,
  textAlign: 'center',
  margin: '10px 0 75px',
  color: gray850,
});

const scoreStyle = ({
  typography: {
    size: { number3 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  top: '50%',
  fontSize: number3,
  fontWeight: bold,
  width: '130px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const scoreNumber =
  (isZero: boolean) =>
  ({
    typography: {
      size: { number4, number1 },
      weight: { bold },
    },
    color: {
      primary: { mint600 },
      gray: { gray350 },
    },
  }: Theme): CSSObject => ({
    display: 'flex',
    alignItems: 'center',
    fontWeight: bold,
    lineHeight: 1.2,
    fontSize: number4,
    color: gray350,
    'p:nth-of-type(1)': {
      color: isZero ? gray350 : mint600,
      fontSize: number1,
    },
  });

const scoreText = ({
  typography: {
    size: { label6 },
    weight: { bold },
  },
  color: {
    gray: { gray650 },
  },
}: Theme): CSSObject => ({
  fontSize: label6,
  fontWeight: bold,
  lineHeight: 1.2,
  color: gray650,
});

const filterWrap: CSSObject = {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'flex-start',
  marginBottom: '40px',
};

export { wrap, textStyle, titleStyle, scoreStyle, scoreText, scoreNumber, filterWrap };
