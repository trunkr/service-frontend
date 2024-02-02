import { CSSObject, Theme } from '@emotion/react';

const pageTitle = ({
  typography: {
    size: { title1 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  fontSize: title1,
  fontWeight: bold,
  lineHeight: '1.3',
  margin: '100px 0 60px',
  alignSelf: 'flex-start',
});

const title = ({
  typography: {
    size: { title5 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  fontSize: title5,
  fontWeight: bold,
  lineHeight: '1.3',
  alignSelf: 'flex-start',
});

const subTitle = ({
  typography: {
    size: { label4 },
    weight: { semibold },
  },
}: Theme): CSSObject => ({
  fontSize: label4,
  fontWeight: semibold,
  lineHeight: '1.3',
  margin: '8px 0 36px',
  alignSelf: 'flex-start',
});

const wrap = ({ grids: { layout4 } }: Theme): CSSObject => ({
  ...layout4,
});

export { wrap, pageTitle, title, subTitle };
