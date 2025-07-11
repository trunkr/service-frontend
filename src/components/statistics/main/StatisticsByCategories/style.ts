import { CSSObject, Theme } from '@emotion/react';

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
    size: { body4 },
    weight: { medium },
  },
}: Theme): CSSObject => ({
  color: gray1000,
  fontSize: body4,
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
  padding: '42px 0 100px',
};

export { title, subTitle, listWrap };
