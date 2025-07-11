import { CSSObject, Theme } from '@emotion/react';

const wrap = ({ grids: { layout3 } }: Theme): CSSObject => ({
  ...layout3,
  marginBottom: '140px',
});

const section: CSSObject = {
  width: '100%',
  margin: '100px 0',
};

const title = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  marginBottom: '78px',
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

const grayDivider: CSSObject = {
  height: 0,
  margin: 0,
  borderStyle: 'solid',
  borderColor: '#efefef',
  borderWidth: '0 0 1px 0',
  width: '100%',
};

export { wrap, section, subTitle, countLabel, btnGroup, filterBtn, title, grayDivider };
