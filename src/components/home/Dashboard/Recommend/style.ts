import { CSSObject, Theme } from '@emotion/react';

const wrap = ({
  color: {
    gray: { gray200 },
  },
}: Theme): CSSObject => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '0 24px',
  '> li': {
    borderRadius: '10px',
    border: `1px solid ${gray200}`,
  },
});

const contentsWrap = ({
  color: {
    gray: { gray650, gray900 },
  },
  typography: {
    size: { body4, title6 },
    weight: { semibold, bold },
  },
}: Theme): CSSObject => ({
  position: 'relative',
  '> p': {
    fontSize: body4,
    fontWeight: semibold,
    marginTop: '10px',
    color: gray650,
    lineHeight: 1.5,
  },
  '> b': {
    fontSize: title6,
    fontWeight: bold,
    color: gray900,
  },
  padding: '24px 24px 40px 24px',
  '> button': {
    position: 'absolute',
    top: '-20px',
    right: '26px',
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    background: gray900,
  },
});

export { wrap, contentsWrap };
