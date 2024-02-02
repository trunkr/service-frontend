import { CSSObject } from '@emotion/react';

type ColorKeyType = 'primary' | 'error' | 'sub' | 'gray';

type ColorType = 'mint' | 'red' | 'purple' | 'green' | 'pink' | 'gray';

type ThemeColorType = `${ColorType}${number}`;

type ColorValueType = { [key in ThemeColorType]: string };

type TypographyNameType = 'title' | 'body' | 'label' | 'number';

type TypographyKeyType = `${TypographyNameType}${string}`;

type TypographyWeightType = 'bold' | 'semibold' | 'medium';

type LayoutType = `layout${number}`;

declare module '@emotion/react' {
  export interface Theme {
    color: { [key in ColorKeyType]: ColorValueType };
    typography: {
      size: { [key in TypographyKeyType]: CSSObject['fontSize'] };
      weight: { [key in TypographyWeightType]: CSSObject['fontWeight'] };
    };
    shadows: { [key in number]: CSSObject['boxShadow'] };
    grids: { [key in LayoutType]: CSSObject };
  }
}
