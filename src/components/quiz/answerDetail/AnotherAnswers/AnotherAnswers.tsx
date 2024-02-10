import React, { useState } from 'react';

import ErrorBoundary from 'components/ErrorBoundary';
import withSuspense from 'hooks/withSuspense';
import { Nullable } from 'types/common';
import icCheckBold from 'static/icons/system/ic_check_bold.svg';

import NoResults from './NoResults';
import { wrap, subTitle, countLabel, btnGroup, filterBtn } from './style';
import List from './List';

function AnotherAnswersErrorBoundary() {
  return (
    <ErrorBoundary fallback={null}>
      <AnotherAnswers />
    </ErrorBoundary>
  );
}

function AnotherAnswers() {
  const [hasAnswer, set] = useState(true);

  let Render: Nullable<React.ReactNode> = null;
  switch (hasAnswer) {
    case true:
      Render = <List />;
      break;
    case false:
      Render = <NoResults />;
      break;
    default:
  }

  return (
    <>
      <div css={wrap}>
        <h2 css={subTitle}>
          이런 풀이도 있어요 <span css={countLabel}>12</span>
        </h2>
        <div css={btnGroup}>
          <button css={[filterBtn(true), { marginRight: '16px' }]}>
            <img src={icCheckBold} alt="" />
            인기 순
          </button>
          <button css={filterBtn(false)} onClick={() => set((prev) => !prev)}>
            최신 순
          </button>
        </div>
      </div>
      {Render}
    </>
  );
}

export default withSuspense(AnotherAnswersErrorBoundary, {
  fallback: null,
});
