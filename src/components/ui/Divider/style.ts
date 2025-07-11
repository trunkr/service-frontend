import { CSSObject, Theme } from '@emotion/react';
import { DividerProps } from './Divider';

const borderStyle =
  ({ orientation, variant, thickness, size, color }: Omit<DividerProps, 'css'>) =>
  ({
    color: {
      gray: { gray200 },
    },
  }: Theme): CSSObject => ({
    borderColor: color || gray200,
    borderStyle: variant,
    ...(orientation === 'horizontal'
      ? {
          width: size,
          borderWidth: `0 0 ${thickness === 'thin' ? 1 : 10}px 0`,
        }
      : {
          height: size,
          borderWidth: `0 0 0 ${thickness === 'thin' ? 1 : 10}px`,
        }),
  });

export { borderStyle };
