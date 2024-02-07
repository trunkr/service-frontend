import React from 'react';

interface Props {
  count: number;
}

function RecommendedAnswerStats({ count }: Props) {
  return (
    <li>
      <div>
        <p>추천 받은 답변 수</p>
        <b>{count}</b>
      </div>
      {count > 0 ? (
        <p>
          {count}명이 추천했어요!{count > 99 && '🎉'}
        </p>
      ) : (
        <p>아직 없어요 🥲</p>
      )}
    </li>
  );
}

export default RecommendedAnswerStats;
