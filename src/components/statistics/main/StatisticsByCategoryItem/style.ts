import { CSSObject, Theme } from '@emotion/react';

const wrap = (isActive: boolean): CSSObject => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: '0 20px',
  cursor: isActive ? 'pointer' : '',

  '& > div': {
    '& > svg': {
      width: '40px',
      height: '40px',

      '& > path': {
        fill: isActive ? '#111' : '#616161 ',
        stroke: isActive ? '#111' : '#616161 ',
      },
    },

    '& > p': {
      color: isActive ? '#111' : '#616161 ',
    },
  },
});

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
