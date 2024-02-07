import React, { Fragment } from 'react';
import { wrap, title } from './style';
import { RECENT_MOCK_DATA } from './constants';
import { StatisticsComponent } from 'components';

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
      <StatisticsComponent.StatisticsByCategories />
    </main>
  );
}

export default Main;
