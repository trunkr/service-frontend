import React, { useMemo, useReducer } from 'react';
import { useParams } from 'react-router-dom';

import icCheckBold from 'static/icons/system/ic_check_bold.svg';
import { QuizQuery } from 'queries';
import { IQuizAnotherAnswer, Nullable } from 'types';

import List from './List';
import NoResults from './NoResults';
import { section, wrap, title, subTitle, countLabel, btnGroup, filterBtn, grayDivider } from './style';

function AnotherAnswers() {
  const { quizId } = useParams();
  const [sort, toggle] = useReducer((c) => !c, true);
  const { data: answers } = QuizQuery.useGetAnotherAnswerResult(
    { quizId: quizId || '', sort: sort ? 'favor,asc' : 'answeredAt,asc' },
    quizId !== '',
  );

  const handleChangeFilter = (condition: boolean) => () => {
    if (condition) toggle();
  };

  const hasAnswers = useMemo(() => {
    if (!answers) return 'pending';
    return Boolean(answers.length);
  }, [answers]);

  let Render: Nullable<React.ReactNode> = null;
  switch (hasAnswers) {
    case true:
      Render = <List data={answers as IQuizAnotherAnswer[]} />;
      break;
    case false:
      Render = <NoResults />;
      break;
    default:
  }

  return (
    <section css={section}>
      <div css={wrap}>
        <hr css={grayDivider} />
        <div css={title}>
          <h2 css={subTitle}>
            이런 풀이도 있어요 <span css={countLabel}>{answers?.length}</span>
          </h2>
          <div css={btnGroup}>
            <button css={[filterBtn(sort), { marginRight: '16px' }]} onClick={handleChangeFilter(!sort)}>
              <img src={icCheckBold} alt="" />
              인기 순
            </button>
            <button css={filterBtn(!sort)} onClick={handleChangeFilter(sort)}>
              최신 순
            </button>
          </div>
        </div>
        {Render}
      </div>
    </section>
  );
}

export default AnotherAnswers;
