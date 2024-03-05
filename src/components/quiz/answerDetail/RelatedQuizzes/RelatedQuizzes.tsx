import React from 'react';
import { useParams } from 'react-router-dom';

import useGetQuizGroup from 'queries/Quiz/useGetQuizGroup';

import 'swiper/css/bundle';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import QuizSwiper from './QuizSwiper';
import { wrap, grayDivider, title } from './style';

function RelatedQuizzes() {
  const { quizId, quizGroupId } = useParams();
  const { data: related } = useGetQuizGroup(
    { quizId: quizId || '', quizGroupId: quizGroupId || '' },
    quizGroupId !== '',
  );

  return (
    <section css={wrap}>
      <hr css={grayDivider} />
      <p css={title}>같이 푼 다른 문제</p>
      <QuizSwiper related={related!} quizGroupId={quizGroupId!} />
    </section>
  );
}

export default RelatedQuizzes;
