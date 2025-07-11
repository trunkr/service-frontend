import React from 'react';
import { wrap } from './style';
import { MemberQuery } from 'queries';
import IncorrectQuizStats from './IncorrectQuizStats';
import RecommendedAnswerStats from './RecommendedAnswerStats';
import SolvedQuizStats from './SolvedQuizStats';

function Stats() {
  const { data } = MemberQuery.useStats();

  return (
    <ul css={wrap}>
      <SolvedQuizStats count={data?.solvedQuizCount || 0} categoryIds={data?.frequentlyQuizCategoryIds || []} />
      <IncorrectQuizStats count={data?.incorrectQuizCount || 0} />
      <RecommendedAnswerStats count={data?.recommendedAnswerCount || 0} />
    </ul>
  );
}

export default Stats;
