import { CSSObject, Theme } from '@emotion/react';

export type ProgressType = 'correct' | 'incorrect' | 'none';

const getColor = (type: ProgressType, theme: Theme, isTrack = true): string => {
  switch (type) {
    case 'correct':
      return isTrack ? theme.color.primary.mint200 : theme.color.primary.mint600;
    case 'incorrect':
      return isTrack ? theme.color.error.red200 : theme.color.error.red600;
    default:
      return isTrack ? theme.color.gray.gray250 : theme.color.gray.gray250;
  }
};

const wrap =
  (type: ProgressType) =>
  (theme: Theme): CSSObject => ({
    position: 'relative',
    height: '4px',
    borderRadius: '0px',
    borderCollapse: 'separate',
    background: getColor(type, theme),
  });

const progress =
  (type: ProgressType) =>
  (theme: Theme): CSSObject => ({
    position: 'absolute',
    top: 0,
    height: '4px',
    borderCollapse: 'separate',
    borderRadius: '0px',
    background: getColor(type, theme, false),
  });

export { wrap, progress };
