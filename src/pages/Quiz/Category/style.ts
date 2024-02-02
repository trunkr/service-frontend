import { CSSObject, Theme } from '@emotion/react';

const wrap: CSSObject = {
  margin: '0 100px',
  display: 'flex',
  flexDirection: 'column',
};

const listWrap: CSSObject = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gap: '24px',
};

const title = ({
  color: {
    gray: { gray1000 },
  },
  typography: {
    size: { title1 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  margin: '80px 0 30px',
  fontSize: title1,
  textAlign: 'center',
  fontWeight: bold,
  color: gray1000,
});

const subTitle = ({
  color: {
    gray: { gray1000 },
  },
  typography: {
    size: { body2 },
    weight: { medium },
  },
}: Theme): CSSObject => ({
  color: gray1000,
  fontSize: body2,
  fontWeight: medium,
  lineHeight: 1.5,
  textAlign: 'center',
});

const settingButton = ({
  color: {
    gray: { gray1000 },
  },
  typography: {
    size: { label4 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  color: gray1000,
  fontSize: label4,
  fontWeight: bold,
  textDecoration: 'underline',
  margin: '12px 0 30px',
});

const filterWrap: CSSObject = {
  display: 'flex',
  justifyContent: 'center',
  gap: '0 10px',
  marginBottom: '30px',
};

const filterButton =
  (isSelected: boolean) =>
  ({
    color: {
      gray: { gray900, gray0, gray300 },
    },
  }: Theme): CSSObject => ({
    padding: '10px 20px',
    borderRadius: '50px',
    background: isSelected ? gray900 : gray0,
    color: isSelected ? gray0 : gray900,
    border: `2px solid ${isSelected ? gray900 : gray300}`,
  });

export { wrap, listWrap, title, subTitle, settingButton, filterWrap, filterButton };
