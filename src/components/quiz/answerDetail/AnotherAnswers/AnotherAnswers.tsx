import React, { useMemo, useReducer } from 'react';
import { useParams } from 'react-router-dom';

import { QuizQuery } from 'queries';
import { IQuizAnotherAnswer } from 'types';

import List from './List';
import NoResults from './NoResults';
import AnotherAnswersSkeleton from './Skeleton';
import { section, wrap, title, subTitle, countLabel, btnGroup, filterBtn, grayDivider, iconCheck } from './style';
import IconCheckBold from 'static/icons/system/IconCheckBold';

function AnotherAnswers() {
  const { quizId } = useParams();
  const [sort, toggle] = useReducer((c) => !c, true);
  const { data: answers, isLoading } = QuizQuery.useGetAnotherAnswerResult(
    { quizId: quizId || '', sort: sort ? 'favor,asc' : 'answeredAt,asc' },
    quizId !== '',
  );

  const hasAnswers = useMemo(() => {
    if (isLoading || !answers) return 'loading';
    return Boolean(answers.length);
  }, [answers]);

  const handleChangeFilter = (condition: boolean) => () => {
    if (condition) toggle();
  };

  let Render = <AnotherAnswersSkeleton />;
  switch (hasAnswers) {
    case true:
      Render = <List data={answers as IQuizAnotherAnswer[]} />;
      break;
    case false:
      Render = <NoResults />;
      break;
    case 'loading':
      Render = <AnotherAnswersSkeleton />;
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
              {sort && <IconCheckBold css={iconCheck} />}
              인기 순
            </button>
            <button css={filterBtn(!sort)} onClick={handleChangeFilter(sort)}>
              {!sort && <IconCheckBold css={iconCheck} />}
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
