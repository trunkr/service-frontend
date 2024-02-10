import { CSSObject, Theme } from '@emotion/react';

const wrap: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
};

const grayDivider: CSSObject = {
  height: 0,
  margin: 0,
  borderStyle: 'solid',
  borderColor: '#FCFCFC',
  borderWidth: '0 0 10px 0',
  width: '100%',
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
  margin: '80px 0 78px',
});

const listWrap: CSSObject = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '22px 24px',
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

export { wrap, title, listWrap, grayDivider, swiperFilterCss };
