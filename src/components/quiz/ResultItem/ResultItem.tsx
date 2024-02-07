import React from 'react';
import { wrap, labelStyle } from './style';
import { AnswerResultType } from 'types';

interface Props {
  item: AnswerResultType;
}

function ResultItem({ item }: Props) {
  return (
    <div css={wrap}>
      <div css={labelStyle(item.isCorrect)}>{item.isCorrect ? '정답' : '오답'}</div>
      <p>{item.question}</p>
    </div>
  );
}

export default ResultItem;
