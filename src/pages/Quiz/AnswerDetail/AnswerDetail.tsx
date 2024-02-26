import React, { Suspense } from 'react';

import { QuizComponent, ErrorComponent } from 'components';
import MyAnswersSkeleton from 'components/quiz/answerDetail/MyAnswer/Skeleton';
import { wrap } from './style';
import { useParams } from 'react-router-dom';

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
          <QuizComponent.AnotherAnswers />
        </ErrorComponent.QueryErrorBoundary>

        <ErrorComponent.QueryErrorBoundary fallback={null}>
          <Suspense fallback={null}>
            <QuizComponent.RelatedQuizzes />
          </Suspense>
        </ErrorComponent.QueryErrorBoundary>
      </ErrorComponent.ErrorBoundaryGroup>
    </main>
  );
}

export default AnswerDetail;
