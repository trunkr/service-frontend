import React, { Suspense } from 'react';
import { type LoaderFunctionArgs, Await, defer, useLoaderData } from 'react-router-dom';
import { type QueryClient } from '@tanstack/react-query';

import { QuizComponent, ErrorComponent } from 'components';
import { getAnother, getDetail } from 'api/quiz/answer';
import { type IQuizAnswer } from 'types';
import { CATEGORY_ICON_MAP } from 'data/category';
import { getQueryKeys } from 'queries/query-key';
import { ANOTHER_ANSWER_KEY, ANSWER_DETAIL_KEY } from 'queries/Quiz/keys';
import { sectionWrap, wrap, categoryName, title, grayDivider } from './style';

// ISSUE: using queryClient.prefetchQuery OR queryClient.ensureQueryData ... what's better?
export function loader(queryClient: QueryClient) {
  return ({ params }: LoaderFunctionArgs) => {
    const { quizId, quizGroupId } = params;
    return defer({
      myAnswerData: queryClient.prefetchQuery({
        queryKey: getQueryKeys(ANSWER_DETAIL_KEY).detail(quizId || ''),
        queryFn: () => getDetail({ quizId: quizId || '', quizGroupId: quizGroupId || '' }),
      }),
      anotherAnswersData: queryClient.prefetchQuery({
        queryKey: getQueryKeys(ANOTHER_ANSWER_KEY).detail(quizId || ''),
        queryFn: () => getAnother(quizId || ''),
      }),
    });
  };
}

function AnswerDetail() {
  const { myAnswerData, anotherAnswersData } = useLoaderData() as Awaited<{
    myAnswerData: IQuizAnswer;
    anotherAnswersData: IQuizAnswer[];
  }>;

  return (
    <main css={wrap}>
      <div css={{ display: 'flex', alignItems: 'center', margin: '80px 0 20px' }}>
        <img src={CATEGORY_ICON_MAP['JAVA']} />
        <p css={categoryName}>Java</p>
      </div>
      <h1 css={title}>자바의 메모리 영역에 대해 설명해주세요.</h1>
      <hr css={grayDivider} />
      <section css={sectionWrap}>
        <ErrorComponent.ErrorBoundaryGroup>
          <ErrorComponent.QueryErrorBoundary fallback={null}>
            <Await resolve={myAnswerData}>
              <Suspense fallback={null}>
                <QuizComponent.MyAnswer />
              </Suspense>
            </Await>
          </ErrorComponent.QueryErrorBoundary>

          <ErrorComponent.QueryErrorBoundary fallback={null}>
            <Await resolve={anotherAnswersData}>
              <Suspense fallback={null}>
                <QuizComponent.AnotherAnswers />
              </Suspense>
            </Await>
          </ErrorComponent.QueryErrorBoundary>

          <ErrorComponent.QueryErrorBoundary fallback={null}>
            <Suspense fallback={null}>
              <QuizComponent.RelatedQuizzes />
            </Suspense>
          </ErrorComponent.QueryErrorBoundary>
        </ErrorComponent.ErrorBoundaryGroup>
      </section>
    </main>
  );
}

export default AnswerDetail;
