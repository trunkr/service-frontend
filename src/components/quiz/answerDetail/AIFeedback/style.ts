import { CSSObject, keyframes, Theme } from '@emotion/react';

const wrap = ({
  color: {
    gray: { gray100, gray200 },
  },
}: Theme): CSSObject => ({
  padding: '30px 30px 40px',
  background: gray100,
  border: `2px solid ${gray200}`,
  borderRadius: '20px',
  marginBottom: '80px',
});

const onlyMe = ({
  color: {
    gray: { gray600 },
  },
  typography: {
    size: { label4 },
    weight: { medium },
  },
}: Theme): CSSObject => ({
  fontSize: label4,
  fontWeight: medium,
  color: gray600,
});

const gpt = ({
  color: {
    primary: { mint400 },
  },
}: Theme): CSSObject => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  background: mint400,
  marginRight: '10px',
  cursor: 'pointer',

  '> img': {
    width: '28.12px',
  },

  ':hover': {
    '> img': {
      animation: `${pop} 0.5s ease-in infinite`,
    },
  },
});

const pop = keyframes`
  0% { 
    transform: translate(0, 0); 
  }
  50% { 
    transform:  translate(0, -5px); 
  }
  100% { 
    transform:  translate(0, 0); 
  }
`;

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

const feedback = ({
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
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-all',
});

const grayDivider: CSSObject = {
  height: 0,
  margin: 0,
  borderStyle: 'solid',
  borderColor: '#efefef',
  borderWidth: '0 0 1px 0',
  width: '100%',
};

export { wrap, onlyMe, gpt, nickname, feedback, grayDivider };
