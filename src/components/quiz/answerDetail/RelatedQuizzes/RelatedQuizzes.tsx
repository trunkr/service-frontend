import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import useGetQuizGroup from 'queries/Quiz/useGetQuizGroup';

import QuizSwiper from './QuizSwiper';
import { wrap, grayDivider, title } from './style';
import { IQuizGroup } from 'types';

function RelatedQuizzes() {
  const { quizId, quizGroupId } = useParams();
  const { data: related, isSuccess } = useGetQuizGroup(
    { quizId: quizId || '', quizGroupId: quizGroupId || '' },
    quizGroupId !== '',
  );

  const filteredResults = useMemo(() => {
    return related ? { ...related, result: related?.result?.filter((item) => item.quizId !== Number(quizId)) } : null;
  }, [related, quizId]);

  return (
    <section css={wrap}>
      <hr css={grayDivider} />
      <p css={title}>같이 푼 다른 문제</p>
      {filteredResults && isSuccess && <QuizSwiper related={filteredResults as IQuizGroup} quizGroupId={quizGroupId} />}
    </section>
  );
}

export default RelatedQuizzes;
