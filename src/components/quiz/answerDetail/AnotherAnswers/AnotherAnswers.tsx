import React, { useMemo, useReducer } from 'react';
import { useParams } from 'react-router-dom';

import { QuizQuery } from 'queries';
import useFavorMutate from 'queries/Quiz/useFavorMutate';
import IconCheckBold from 'static/icons/system/IconCheckBold';
import { IQuizAnotherAnswer, Nullable } from 'types';

import List from './List';
import NoResults from './NoResults';
import { section, wrap, title, subTitle, countLabel, btnGroup, filterBtn, grayDivider, iconCheck } from './style';

function AnotherAnswers() {
  const { quizId } = useParams();
  const [sort, toggle] = useReducer((c) => !c, true);
  const { data: answers } = QuizQuery.useGetAnotherAnswerResult(
    { quizId: quizId || '', sort: sort ? 'favor,asc' : 'answeredAt,asc' },
    quizId !== '',
  );
  const { mutate: updateFavor } = useFavorMutate({ quizId: quizId || '', sort: sort ? 'favor,asc' : 'answeredAt,asc' });

  const hasAnswers = useMemo(() => {
    if (!answers) return 'pending';
    return Boolean(answers.length);
  }, [answers]);

  const handleChangeFilter = (condition: boolean) => () => {
    if (condition) toggle();
  };

  let Render: Nullable<React.ReactNode> = null;
  switch (hasAnswers) {
    case true:
      Render = <List data={answers as IQuizAnotherAnswer[]} updateFavor={updateFavor} />;
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
