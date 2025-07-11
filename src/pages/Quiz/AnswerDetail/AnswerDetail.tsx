import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';

import { QuizComponent, ErrorComponent } from 'components';
import MyAnswersSkeleton from 'components/quiz/answerDetail/MyAnswer/Skeleton';
import AnotherAnswersSkeleton from 'components/quiz/answerDetail/AnotherAnswers/Skeleton';
import { wrap } from './style';
import {
  grayDividerRelatedQuizzes,
  wrapRelatedQuizzes,
  titleRelatedQuizzes,
} from 'components/quiz/answerDetail/RelatedQuizzes/style';

function AnswerDetail() {
  const { quizId } = useParams();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [quizId]);

  return (
    <main css={wrap}>
      <ErrorComponent.ErrorBoundaryGroup>
        <ErrorComponent.QueryErrorBoundary>
          <Suspense fallback={<MyAnswersSkeleton />}>
            <QuizComponent.MyAnswer />
          </Suspense>
        </ErrorComponent.QueryErrorBoundary>

        <ErrorComponent.QueryErrorBoundary>
          <Suspense fallback={<AnotherAnswersSkeleton />}>
            <QuizComponent.AnotherAnswers />
          </Suspense>
        </ErrorComponent.QueryErrorBoundary>

        <section css={wrapRelatedQuizzes}>
          <hr css={grayDividerRelatedQuizzes} />
          <p css={titleRelatedQuizzes}>같이 푼 다른 문제</p>
          <ErrorComponent.QueryErrorBoundary>
            <QuizComponent.RelatedQuizzes />
          </ErrorComponent.QueryErrorBoundary>
        </section>
      </ErrorComponent.ErrorBoundaryGroup>
    </main>
  );
}

export default AnswerDetail;
