import { CSSObject, Theme } from '@emotion/react';

const wrap: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
};

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
});

const subTitle = ({
  color: {
    gray: { gray1000 },
    sub: { purple750 },
  },
  typography: {
    size: { body2 },
    weight: { medium },
  },
}: Theme): CSSObject => ({
  color: gray1000,
  fontSize: body2,
  fontWeight: medium,
  marginTop: '12px',
  '> span': {
    marginLeft: '4px',
    color: purple750,
  },
});

const listWrap: CSSObject = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '22px 24px',
  paddingTop: '42px',
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

const emptyWrap = ({
  color: {
    gray: { gray0, gray600, gray900 },
    primary: { mint600 },
  },
  typography: {
    size: { label1, label4 },
    weight: { medium, bold },
  },
}: Theme): CSSObject => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  marginBottom: '150px',

  '& > div': {
    marginBottom: '10px',
  },

  '& > span': {
    color: gray900,
    fontSize: label1,
    fontWeight: bold,
    marginBottom: '6px',
  },

  '& > p': {
    color: gray600,
    fontSize: label4,
    fontWeight: medium,
    marginBottom: '24px',
  },

  '& > button': {
    padding: '12px 22px',
    color: gray0,
    background: mint600,
    fontSize: label4,
    fontWeight: bold,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '44px',
  },
});

export { wrap, title, subTitle, listWrap, swiperFilterCss, leftBtn, rightBtn, emptyWrap };
