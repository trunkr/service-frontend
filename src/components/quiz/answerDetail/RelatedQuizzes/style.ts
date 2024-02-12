import { CSSObject, Theme } from '@emotion/react';

const wrap: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
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
});

const subTitle = ({
  color: {
    gray: { gray1000 },
    sub: { purple750 },
  },
  typography: {
    size: { body2 },
    weight: { medium },
  },
}: Theme): CSSObject => ({
  color: gray1000,
  fontSize: body2,
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
  paddingTop: '42px',
};

export { wrap, title, subTitle, listWrap };
