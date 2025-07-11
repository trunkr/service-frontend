import { CSSObject } from '@emotion/react';

const flex: CSSObject = {
  display: 'flex',
};

const flexAlignCenter: CSSObject[] = [
  flex,
  {
    alignItems: 'center',
  },
];

const flexJustifyCenter: CSSObject[] = [
  flex,
  {
    justifyContent: 'center',
  },
];

const flexColumn: CSSObject[] = [
  flex,
  {
    flexDirection: 'column',
  },
];

const flex1: CSSObject = {
  flex: 1,
};

export default { flex, flexAlignCenter, flexJustifyCenter, flexColumn, flex1 };
