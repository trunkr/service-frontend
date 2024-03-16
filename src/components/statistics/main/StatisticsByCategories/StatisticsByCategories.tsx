import React, { Fragment } from 'react';
import { title, subTitle, listWrap } from './style';
import { StatisticsComponent } from 'components';
import useStatisticsByCategories from './useStatisticsByCategories';

function StatisticsByCategories() {
  const { list, data } = useStatisticsByCategories();

  return (
    <div css={{ margin: '0 100px' }}>
      <p css={(theme) => ({ ...title(theme) })}>CS 카테고리별 정답율 분석</p>
      <p css={subTitle}>
        CS 카테고리 {list.length}개 중<span>{data?.content.length || 0}</span>개 학습 중
      </p>
      <div css={listWrap}>
        {list.map((item) => (
          <Fragment key={item.categoryId}>
            <StatisticsComponent.StatisticsByCategoryItem item={item} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default StatisticsByCategories;
