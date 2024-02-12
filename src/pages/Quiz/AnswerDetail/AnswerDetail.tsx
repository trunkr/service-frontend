import React from 'react';

import { QuizComponent } from 'components';
import { sectionWrap, wrap, categoryName, title, grayDivider } from './style';
import { CATEGORY_ICON_MAP } from 'data/category';

// 퀴즈 답변 상세 조회
// 특정 퀴즈에 대한 다른 사람들이 푼 답변 조회

function AnswerDetail() {
  return (
    <main css={wrap}>
      <div css={{ display: 'flex', alignItems: 'center', margin: '80px 0 20px' }}>
        <img src={CATEGORY_ICON_MAP['JAVA']} />
        <p css={categoryName}>Java</p>
      </div>
      <h1 css={title}>자바의 메모리 영역에 대해 설명해주세요.</h1>
      <hr css={grayDivider} />
      <section css={sectionWrap}>
        <QuizComponent.MyAnswer />
        <QuizComponent.AnotherAnswers />
        <QuizComponent.RelatedQuizzes />
      </section>
    </main>
  );
}

export default AnswerDetail;
