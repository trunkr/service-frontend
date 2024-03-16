import { CSSObject, Theme } from '@emotion/react';

const wrap: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
};

const grayDivider = ({
  color: {
    gray: { gray100 },
  },
}: Theme): CSSObject => ({
  height: 0,
  margin: 0,
  borderStyle: 'solid',
  borderColor: gray100,
  borderWidth: '0 0 10px 0',
  width: '100%',
});

const title = ({
  color: {
    gray: { gray1000 },
  },
  typography: {
    size: { title5 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  fontSize: title5,
  fontWeight: bold,
  color: gray1000,
  margin: '80px 0 78px',
});

const listWrap: CSSObject = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '22px 24px',
};

const swiperFilterCss = (): CSSObject => ({
  position: 'relative',
  width: '100%',

  '.swiper-button-disabled': {
    opacity: '0 !important',
  },

  '.swiper-button': {
    '&-prev': {
      display: 'none',
    },

    '&-next': {
      display: 'none',
    },
  },
});

const leftBtn = ({
  color: {
    gray: { gray0 },
  },
}: Theme): CSSObject => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: gray0,
  height: '44px',
  aspectRatio: '1 / 1',
  fontSize: '12px !important',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  borderRadius: '50%',
  zIndex: 10,
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  left: '78px',

  '& > div > svg': {
    transform: 'rotate(270deg)',

    '& > path': {
      fill: gray0,
    },
  },
});

const rightBtn = ({
  color: {
    gray: { gray0 },
  },
}: Theme): CSSObject => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: gray0,
  height: '44px',
  aspectRatio: '1 / 1',
  fontSize: '12px !important',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  borderRadius: '50%',
  zIndex: 10,
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  right: '78px',

  '& > div > svg': {
    transform: 'rotate(90deg)',

    '& > path': {
      fill: gray0,
    },
  },
});

export { wrap, title, listWrap, grayDivider, swiperFilterCss, leftBtn, rightBtn };
