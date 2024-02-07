import { CSSObject, Theme } from '@emotion/react';

const wrap = ({ shadows }: Theme): CSSObject => ({
  position: 'fixed',
  boxShadow: shadows[1],
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 3000,
});

const backgroundCover =
  (opacity: number, isWhite: boolean) =>
  ({
    color: {
      gray: { gray1000, gray0 },
    },
  }: Theme): CSSObject => ({
    background: isWhite ? gray0 : gray1000,
    opacity,
    height: '100vh',
  });

const closeStyle: CSSObject = {
  position: 'absolute',
  right: '30px',
};

const contents = ({
  color: {
    gray: { gray0 },
  },
  shadows,
}: Theme): CSSObject => ({
  boxSizing: 'border-box',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  maxWidth: '600px',
  minWidth: '590px',
  background: gray0,
  boxShadow: shadows[1],
  padding: '30px',
  borderRadius: '20px',
});

const foot = ({
  color: {
    gray: { gray1000, gray0, gray150 },
  },
}: Theme): CSSObject => ({
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'flex-start',
  gap: '0 10px',
  '> button': {
    padding: '12px 33px',
    borderRadius: '10px',
  },
  'button:nth-of-type(2n+1)': {
    color: gray0,
    background: gray1000,
  },
  'button:nth-of-type(2n)': {
    color: gray1000,
    background: gray150,
  },
});

const background: CSSObject = {
  position: 'fixed',
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  height: '100vh',
};

const titleStyle = ({
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
  marginBottom: '20px',
  whiteSpace: 'pre',
  lineHeight: '31.2px',
});

const subTitleStyle = ({
  color: {
    gray: { gray1000 },
  },
  typography: {
    size: { label4 },
    weight: { semibold },
  },
}: Theme): CSSObject => ({
  color: gray1000,
  fontSize: label4,
  fontWeight: semibold,
  lineHeight: 1.7,
  marginBottom: '30px',
});

export { wrap, foot, background, titleStyle, subTitleStyle, closeStyle, contents, backgroundCover };
