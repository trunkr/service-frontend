import React, { Fragment } from 'react';

import DoughnutChart from 'components/ui/DoughnutChart';
import { wrap, textStyle, titleStyle, scoreStyle, scoreText, scoreNumber, filterWrap } from './style';
import useCategory from './useCategory';
import { QuizComponent, UiComponent } from 'components';
import { CATEGORY_FORMATTED_MAP } from 'data/category';

function Category() {
  const {
    page,
    totalPage,
    percentageOfCorrectAnswers,
    category,
    statistics,
    content,
    seeOnlyIncorrectQuiz,
    setPage,
    setSeeOnlyIncorrectQuiz,
  } = useCategory();

  return (
    <main css={wrap}>
      <div css={{ position: 'relative' }}>
        <DoughnutChart percent={percentageOfCorrectAnswers} size={131} />
        <div css={scoreStyle}>
          <div css={scoreNumber(percentageOfCorrectAnswers === 0)}>
            <p>{percentageOfCorrectAnswers}</p>
            <p>%</p>
          </div>
          <p css={scoreText}>정답율</p>
        </div>
      </div>
      <h1 css={titleStyle}>{CATEGORY_FORMATTED_MAP[category?.name as keyof typeof CATEGORY_FORMATTED_MAP]}</h1>
      <p
        css={textStyle}
      >{`푼 문제 총 ${statistics.totalCount}개 (정답 ${statistics.correctCount}개 / 오답 ${statistics.incorrectCount}개)`}</p>
      <div css={filterWrap}>
        <UiComponent.CheckBox uiType="rect" checked={seeOnlyIncorrectQuiz} handleCheck={setSeeOnlyIncorrectQuiz}>
          <p>틀린 문제만 보기</p>
        </UiComponent.CheckBox>
      </div>

      {content.map((item) => (
        <Fragment key={item.quizId}>
          <QuizComponent.ResultItem item={item} quizGroupId="" />
        </Fragment>
      ))}
      <UiComponent.Pagination currentPage={page} totalPage={totalPage} handlePage={setPage} />
    </main>
  );
}

export default Category;
