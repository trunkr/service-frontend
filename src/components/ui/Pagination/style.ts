import { CSSObject, Theme } from '@emotion/react';

const wrap: CSSObject = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  '> button': {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    ':hover': {
      background: 'rgba(0,0,0,0.05)',
    },
  },
};

const pageBtn =
  (isSelect: boolean) =>
  ({
    typography: {
      size: { label2 },
      weight: { bold },
    },
    color: {
      gray: { gray900 },
      primary: { mint600 },
    },
  }: Theme): CSSObject => ({
    lineHeight: 1.2,
    fontSize: label2,
    fontWeight: bold,
    color: isSelect ? mint600 : gray900,
  });

const btnStyle = ({
  color: {
    gray: { gray250 },
  },
}: Theme): CSSObject => ({
  border: `2px solid ${gray250}`,
});

export { wrap, btnStyle, pageBtn };
