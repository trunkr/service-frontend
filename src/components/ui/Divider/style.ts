import { CSSObject } from '@emotion/react';
import { DividerOrientationType, DividerVariantType, DividerSizeType } from 'types';

const borderStyle = (
  orientation?: DividerOrientationType,
  variant?: DividerVariantType,
  size?: DividerSizeType,
  color?: string,
): CSSObject => ({
  borderColor: color,
  borderStyle: variant,
  ...(orientation === 'horizontal'
    ? {
        width: '100%',
        borderWidth: `0 0 ${size === 'thin' ? 1 : 10}px 0`,
      }
    : {
        height: '100%',
        borderWidth: `0 0 0 ${size === 'thin' ? 1 : 10}px`,
      }),
});

export { borderStyle };
