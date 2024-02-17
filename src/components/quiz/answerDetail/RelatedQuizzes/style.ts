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

export { wrap, title, listWrap, grayDivider };
