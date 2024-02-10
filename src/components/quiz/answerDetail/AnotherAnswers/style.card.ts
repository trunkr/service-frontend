import { CSSObject, Theme } from '@emotion/react';

const listWrap = ({
  color: {
    gray: { gray200 },
  },
}: Theme): CSSObject => ({
  '& > li': {
    paddingTop: '30px',

    ':first-of-type': {
      paddingTop: '0px',
    },

    ':not(:last-of-type)': {
      paddingBottom: '30px',
      borderBottom: `1px solid ${gray200}`,
    },

    ':last-of-type': {
      paddingBottom: '60px',
    },
  },
});

const user = ({
  color: {
    gray: { gray1000 },
  },
}: Theme): CSSObject => ({
  background: gray1000,
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  marginRight: '10px',
  '> img': {
    width: '12.27px',
  },
});

const nickname = ({
  color: {
    gray: { gray600, gray1000 },
  },
  typography: {
    size: { label1 },
    weight: { medium, bold },
  },
}: Theme): CSSObject => ({
  fontSize: label1,
  fontWeight: bold,
  color: gray1000,
  marginBottom: '2px',

  '& > span:last-of-type': {
    fontWeight: medium,
    color: gray600,
    marginLeft: '2px',
  },
});

const date = ({
  color: {
    gray: { gray400 },
  },
  typography: {
    size: { label5 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  fontSize: label5,
  fontWeight: bold,
  color: gray400,
});

const answer =
  (isExpanded: boolean) =>
  ({
    color: {
      gray: { gray0, gray600, gray900 },
    },
    typography: {
      size: { body2 },
      weight: { medium, semibold },
    },
  }: Theme): CSSObject => ({
    fontSize: body2,
    fontWeight: medium,
    color: gray900,
    lineHeight: 1.7,
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-all',
    marginBottom: '14px',
    position: 'relative',

    ...(!isExpanded && {
      overflow: 'hidden',
      display: '-webkit-box',
      WebkitLineClamp: 10,
      WebkitBoxOrient: 'vertical',
    }),

    '& > button': {
      position: 'absolute',
      right: 0,
      bottom: '0px',
      padding: '0 15px',
      width: 'max-content',
      height: '27px',
      fontSize: body2,
      fontWeight: semibold,
      color: gray600,
      backgroundColor: gray0,
      textAlign: 'center',
    },
  });

const thumbsUp = ({
  color: {
    gray: { gray0, gray1000 },
  },
  typography: {
    size: { label2 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  display: 'flex',
  alignItems: 'center',
  background: gray0,
  height: '40px',
  padding: '0 8px',

  '& > span': {
    color: gray1000,
    fontSize: label2,
    fontWeight: bold,
    marginLeft: '2px',
    position: 'relative',
    top: '1px',
  },
});

const nextBtn = ({
  color: {
    gray: { gray150, gray1000 },
  },
  typography: {
    size: { label2 },
    weight: { bold },
  },
}: Theme): CSSObject => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '56px',
  background: gray150,
  borderRadius: '10px',

  '& > span': {
    color: gray1000,
    fontSize: label2,
    fontWeight: bold,
    marginRight: '6px',
  },

  '& > img': {
    transform: 'rotate(180deg)',
  },
});

export { listWrap, user, nickname, date, answer, thumbsUp, nextBtn };
