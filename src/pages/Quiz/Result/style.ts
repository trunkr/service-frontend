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
  marginTop: '30px',
});

const textStyle = ({
  color: {
    gray: { gray1000 },
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
  margin: '20px 0 60px',
  color: gray1000,
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
  textAlign: 'center',
});

export { wrap, textStyle, titleStyle, scoreStyle };
