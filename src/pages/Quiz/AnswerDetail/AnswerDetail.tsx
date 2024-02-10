import React, { Suspense } from 'react';

import { QuizComponent, ErrorComponent } from 'components';
import { wrap } from './style';

function AnswerDetail() {
  return (
    <main css={wrap}>
      <ErrorComponent.ErrorBoundaryGroup>
        <ErrorComponent.QueryErrorBoundary fallback={null}>
          <Suspense fallback={null}>
            <QuizComponent.MyAnswer />
          </Suspense>
        </ErrorComponent.QueryErrorBoundary>

        <ErrorComponent.QueryErrorBoundary fallback={null}>
          <Suspense fallback={null}>
            <QuizComponent.AnotherAnswers />
          </Suspense>
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
