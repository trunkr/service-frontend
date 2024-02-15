import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { QuizQuery } from 'queries';
import { Nullable } from 'types/common';
import icCheckBold from 'static/icons/system/ic_check_bold.svg';

import List from './List';
import NoResults from './NoResults';
import { wrap, subTitle, countLabel, btnGroup, filterBtn, grayDivider } from './style';

function AnotherAnswers() {
  const { quizId } = useParams();
  const { data } = QuizQuery.useGetAnotherAnswerResult(quizId || '', quizId !== '');

  const answers = useMemo(() => {
    if (!data) return false;
    return Boolean(data.length);
  }, [data]);

  let Render: Nullable<React.ReactNode> = null;
  switch (answers) {
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
      <hr css={grayDivider} />
      <div css={wrap}>
        <h2 css={subTitle}>
          이런 풀이도 있어요 <span css={countLabel}>12</span>
        </h2>
        <div css={btnGroup}>
          <button css={[filterBtn(true), { marginRight: '16px' }]}>
            <img src={icCheckBold} alt="" />
            인기 순
          </button>
          <button css={filterBtn(false)}>최신 순</button>
        </div>
      </div>
      {Render}
    </>
  );
}

export default AnotherAnswers;
