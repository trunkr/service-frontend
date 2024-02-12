import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ErrorBoundary from 'components/ErrorBoundary';
import withSuspense from 'hooks/withSuspense';
import useGetAnotherAnswerResult from 'queries/Quiz/useGetAnotherAnswer';

import { wrap, title } from './style';
import { RECENT_MOCK_DATA } from 'pages/Quiz/constants';
import { UiComponent } from 'components';

function RelatedQuizzesErrorBoundary() {
  return (
    <ErrorBoundary fallback={null}>
      <RelatedQuizzes />
    </ErrorBoundary>
  );
}

function RelatedQuizzes() {
  const { quizId } = useParams();
  const { data } = useGetAnotherAnswerResult(quizId || '', quizId !== '');
  console.log('data :', data);

  return (
    <div css={wrap}>
      <p css={(theme) => ({ ...title(theme), margin: '170px 0 78px' })}>같이 푼 다른 문제</p>
      <div css={{ display: 'flex', gap: '0 20px', marginBottom: '150px' }}>
        {RECENT_MOCK_DATA.map((item) => (
          <Fragment key={item.quizId}>
            <UiComponent.QuizCard item={item} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default withSuspense(RelatedQuizzesErrorBoundary, {
  fallback: null,
});
