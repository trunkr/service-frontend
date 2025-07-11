import { CSSObject, Theme } from '@emotion/react';

const optionTitle = ({
  color: {
    gray: { gray1000 },
  },
  typography: {
    size: { label1 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  marginLeft: '4px',
  paddingTop: '2px',
  fontSize: label1,
  fontWeight: bold,
  lineHeight: 1.2,
  color: gray1000,
});

const rows: CSSObject = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
};

export { optionTitle, rows };
