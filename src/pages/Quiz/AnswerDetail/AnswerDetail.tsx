import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';

import { QuizComponent, ErrorComponent } from 'components';
import MyAnswersSkeleton from 'components/quiz/answerDetail/MyAnswer/Skeleton';
import AnotherAnswersSkeleton from 'components/quiz/answerDetail/AnotherAnswers/Skeleton';
import { wrap } from './style';

function AnswerDetail() {
  const { quizId } = useParams();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [quizId]);

  return (
    <main css={wrap}>
      <ErrorComponent.ErrorBoundaryGroup>
        <ErrorComponent.QueryErrorBoundary fallback={null}>
          <Suspense fallback={<MyAnswersSkeleton />}>
            <QuizComponent.MyAnswer />
          </Suspense>
        </ErrorComponent.QueryErrorBoundary>

        <ErrorComponent.QueryErrorBoundary fallback={null}>
          <Suspense fallback={<AnotherAnswersSkeleton />}>
            <QuizComponent.AnotherAnswers />
          </Suspense>
        </ErrorComponent.QueryErrorBoundary>

        <ErrorComponent.QueryErrorBoundary fallback={null}>
          <QuizComponent.RelatedQuizzes />
        </ErrorComponent.QueryErrorBoundary>
      </ErrorComponent.ErrorBoundaryGroup>
    </main>
  );
}

export default AnswerDetail;
