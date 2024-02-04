import { keyframes, type CSSObject, type Theme } from '@emotion/react';

const scaleUp = keyframes`
  from { max-height: 0;}
  to {max-height: 100px;}
`;

const scaleDown = keyframes`
  from { max-height: 100px;}
  to { max-height: 0;}
 `;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-50%);}
  to { opacity: 1; transform: translateY(0)}
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0)}
  to { opacity: 0; transform: translateY(50%)}
 `;

export const toastContainerStyle: CSSObject = {
  position: 'fixed',
  top: '60px',
  left: '50%',
  height: 'max-content',
  transform: 'translateX(-50%)',
  zIndex: 4000,

  '& > div:not(:first-of-type)': {
    marginTop: '8px',
  },
};

export const wrapperStyle = (isClosing: boolean): CSSObject => ({
  maxHeight: 0,
  overflow: 'visible',
  animation: `0.6s forwards ${isClosing ? scaleDown : scaleUp}`,

  '& > div': {
    animation: `0.3s forwards ${isClosing ? fadeOut : fadeIn}`,
  },
});

export const toastStyle = ({
  color: {
    gray: { gray900 },
  },
}: Theme): CSSObject => ({
  width: '608px',
  display: 'flex',
  alignItems: 'center',
  gap: '30px',
  background: gray900,
  padding: '20px 24px',
  borderRadius: '20px',
});

export const textStyle = ({
  color: {
    gray: { gray0 },
  },
  typography: {
    size: { label4 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  color: gray0,
  fontSize: label4,
  fontWeight: bold,
  lineHeight: 1.5,
});

export const closeStyle: CSSObject = {
  all: 'unset',
  cursor: 'pointer',
};
