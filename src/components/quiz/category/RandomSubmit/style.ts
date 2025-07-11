import { CSSObject } from '@emotion/react';

const wrap: CSSObject = {
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  bottom: 0,
  left: 0,
  right: 0,
  height: '190px',
  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 27.63%)',
  '> button': {
    marginTop: '20px',
    width: '400px',
    height: '66px',
    borderRadius: '10px',
  },
};

export { wrap };
