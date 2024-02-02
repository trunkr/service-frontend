import React, { Fragment } from 'react';
import { wrap, title, subTitle, listWrap } from './style';
import { RECENT_MOCK_DATA } from './constants';
import { StatisticsComponent } from 'components';
import { IQuizStatisticsByCategoriesItem } from 'types';

function Main() {
  return (
    <main css={wrap}>
      <p css={(theme) => ({ ...title(theme), margin: '80px 0 30px' })}>최근에 푼 문제 복습하기</p>
      <div css={{ display: 'flex', gap: '0 20px', marginBottom: '150px' }}>
        {RECENT_MOCK_DATA.map((item) => (
          <Fragment key={item.quizId}>
            <StatisticsComponent.RecentItem item={item} />
          </Fragment>
        ))}
      </div>
      <p css={(theme) => ({ ...title(theme) })}>CS 카테고리별 정답율 분석</p>
      <p css={subTitle}>
        CS 카테고리 11개 중<span>3</span>개 학습 중
      </p>
      <div css={listWrap}>
        {[].map((item: IQuizStatisticsByCategoriesItem) => (
          <Fragment key={item.categoryId}>
            <StatisticsComponent.StatisticsByCategoryItem item={item} />
          </Fragment>
        ))}
      </div>
    </main>
  );
}

export default Main;
