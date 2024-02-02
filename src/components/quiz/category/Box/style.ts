import { CSSObject, Theme } from '@emotion/react';

const wrap =
  (isChecked: boolean) =>
  ({
    color: {
      primary: { mint600 },
      gray: { gray250 },
    },
  }: Theme): CSSObject => ({
    position: 'relative',
    border: `2px solid ${isChecked ? mint600 : gray250}`,
    borderRadius: '6px',
    padding: '24px',
  });

export { wrap };
