import { CSSObject, Theme } from '@emotion/react';

const wrap = ({ grids: { layout3 } }: Theme): CSSObject => ({
  ...layout3,
  alignItems: 'flex-start',
});

const sectionWrap: CSSObject = {
  margin: '80px 0 58px',
};

const categoryName = ({
  color: {
    gray: { gray870 },
  },
  typography: {
    size: { label5 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  fontSize: label5,
  fontWeight: bold,
  color: gray870,
  marginLeft: '6px',
});

const title = ({
  color: {
    gray: { gray1000 },
  },
  typography: {
    size: { title2 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  marginBottom: '60px',
  fontSize: title2,
  fontWeight: bold,
  color: gray1000,
});

const grayDivider: CSSObject = {
  height: 0,
  margin: 0,
  borderStyle: 'solid',
  borderColor: '#efefef',
  borderWidth: '0 0 1px 0',
  width: '100%',
};

export { wrap, sectionWrap, categoryName, title, grayDivider };
