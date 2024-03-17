import { CSSObject, Theme } from '@emotion/react';

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
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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

export { noResultsWrap, noResultImg, noResultText };
