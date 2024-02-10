import { CSSObject, Theme } from '@emotion/react';

const wrap = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  margin: '60px 0 58px',
};

const subTitle = ({
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
  lineHeight: 1.4,
  marginRight: '10px',
});

const countLabel = ({
  color: {
    gray: { gray400 },
  },
}: Theme): CSSObject => ({
  color: gray400,
});

const btnGroup = {
  display: 'flex',
  alignItems: 'center',
};

const filterBtn =
  (isActive: boolean) =>
  ({
    color: {
      primary: { mint600 },
      gray: { gray500 },
    },
    typography: {
      size: { label5 },
      weight: { bold },
    },
  }: Theme): CSSObject => ({
    display: 'flex',
    alignItems: 'center',
    color: isActive ? mint600 : gray500,
    fontSize: label5,
    fontWeight: bold,

    '& > img': {
      marginRight: '2px',
    },
  });

const noResultsWrap: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '170px',
};

const noResultImg: CSSObject = {
  width: '60px',
  height: '60px',
  marginBottom: '10px',
};

const noResultText = ({
  color: {
    gray: { gray900 },
  },
  typography: {
    size: { label1 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  color: gray900,
  fontSize: label1,
  fontWeight: bold,
});

export { wrap, subTitle, countLabel, btnGroup, filterBtn, noResultsWrap, noResultImg, noResultText };
