import { CSSObject, Theme } from '@emotion/react';

const wrap: CSSObject = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: '0 20px',
};

const title = ({
  color: {
    gray: { gray900 },
  },
  typography: {
    size: { title6 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  fontSize: title6,
  fontWeight: bold,
  lineHeight: 1.3,
  color: gray900,
  marginBottom: '6px',
});

const subTitle = ({
  color: {
    gray: { gray770 },
  },
  typography: {
    size: { label6 },
    weight: { medium },
  },
}: Theme): CSSObject => ({
  fontSize: label6,
  fontWeight: medium,
  lineHeight: 1.2,
  color: gray770,
  marginBottom: '21px',
});

export { wrap, title, subTitle };
