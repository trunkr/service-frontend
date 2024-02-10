import { CSSObject, Theme } from '@emotion/react';

const wrap: CSSObject = {
  margin: '0 100px',
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

const swiperFilterCss = ({
  color: {
    gray: { gray0 },
  },
}: Theme): CSSObject => ({
  position: 'relative',
  width: '100%',

  '.swiper-button-disabled': {
    opacity: '0 !important',
  },

  '.swiper-button': {
    '&-prev': {
      cursor: 'pointer',
      zIndex: 10,

      '&:after': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: gray0,
        height: '44px',
        aspectRatio: '1 / 1',
        fontSize: '12px !important',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderRadius: '50%',
      },
    },

    '&-next': {
      cursor: 'pointer',
      zIndex: 10,

      '&:after': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: gray0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        height: '44px !important',
        aspectRatio: '1 / 1',
        fontSize: '12px !important',
        borderRadius: '50%',
      },
    },
  },
});

export { wrap, title, subTitle, listWrap, swiperFilterCss };
