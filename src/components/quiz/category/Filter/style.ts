import { CSSObject, Theme } from '@emotion/react';

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
    typography: {
      size: { body4 },
      weight: { semibold },
    },
  }: Theme): CSSObject => ({
    padding: '10px 20px',
    borderRadius: '50px',
    background: isSelected ? gray900 : gray0,
    color: isSelected ? gray0 : gray900,
    border: `2px solid ${isSelected ? gray900 : gray300}`,
    fontSize: body4,
    fontWeight: semibold,
  });

export { filterButton, filterWrap };
