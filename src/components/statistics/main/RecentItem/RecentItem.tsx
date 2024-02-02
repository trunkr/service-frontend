import React from 'react';
import { RecentAnswerType } from 'types';
import { wrap, title, statusLabel, moreButton } from './style';

interface Props {
  item: RecentAnswerType;
}

function RecentItem({ item }: Props) {
  return (
    <div css={wrap}>
      <div>
        <div css={statusLabel(item.quizAnswerStatus === 'CORRECT')}>
          {item.quizAnswerStatus === 'CORRECT' ? '정답' : '오답'}
        </div>
        <p css={title}>{item.question}</p>
      </div>
      <button type="button" css={moreButton}>
        문제 풀이 보기
      </button>
    </div>
  );
}

export default RecentItem;
