import { CSSObject, Theme, keyframes } from '@emotion/react';

const wrap = ({ grids: { layout3 } }: Theme): CSSObject => ({
  ...layout3,
});

const pageTitle = ({
  typography: {
    size: { title1 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  fontSize: title1,
  fontWeight: bold,
  lineHeight: '1.3',
  margin: '100px 0 60px',
});

const itemWrap: CSSObject = {
  gap: '60px 60px',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
};

const item = ({
  color: {
    gray: { gray1000 },
  },
}: Theme): CSSObject => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  width: '160px',
  height: '160px',
  background: gray1000,
  cursor: 'pointer',
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

const iconStyle: CSSObject = {
  ':hover': {
    animation: `${pop} 0.5s ease-in infinite`,
  },
};

const checkIcon: CSSObject = {
  position: 'absolute',
  right: 0,
  top: '8px',
};

export { wrap, item, itemWrap, pageTitle, iconStyle, checkIcon };
