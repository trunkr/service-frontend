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

const container: CSSObject = {
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

const wrap = (isClosing: boolean): CSSObject => ({
  width: '608px',
  maxHeight: 0,
  overflow: 'visible',
  animation: `0.6s forwards ${isClosing ? scaleDown : scaleUp}`,

  '& > div': {
    animation: `0.3s forwards ${isClosing ? fadeOut : fadeIn}`,
  },
});

const toast = ({
  color: {
    gray: { gray900 },
  },
}: Theme): CSSObject => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '30px',
  background: gray900,
  padding: '20px 24px',
  borderRadius: '20px',
});

const text = ({
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

const closeBtn: CSSObject = {
  all: 'unset',
  cursor: 'pointer',
};

export { container, wrap, toast, text, closeBtn };
