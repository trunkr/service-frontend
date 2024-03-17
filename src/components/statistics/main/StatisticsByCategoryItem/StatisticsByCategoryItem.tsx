import React from 'react';

import { IQuizStatisticsByCategoriesItem } from 'types';
import Box from 'components/quiz/category/Box';
import { wrap, title, subTitle } from './style';
import { UiComponent } from 'components';
import { useNavigate } from 'react-router-dom';
import { PATH } from 'data/path';
import { CATEGORY_FORMATTED_MAP } from 'data/category';
import { ICON_MAP } from 'components/home/Dashboard/Recommend/constants';

interface Props {
  item: IQuizStatisticsByCategoriesItem;
}

function StatisticsByCategoryItem({ item }: Props) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (!item.totalSolvedCount) return;
    else navigate(`${PATH.statistics}/${item.categoryId}`);
  };

  return (
    <Box handleClick={handleClick}>
      <div css={wrap(!!item.totalSolvedCount)}>
        <img src={ICON_MAP(!!item.totalSolvedCount)[item.categoryName]} alt="" width={40} />
        <div css={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <p css={title}>{CATEGORY_FORMATTED_MAP[item.categoryName]}</p>
          <p css={subTitle}>{`푼 문제 총 ${item.totalSolvedCount}개`}</p>
          <div css={{ display: 'flex', width: '100%', alignItems: 'center' }}>
            <div
              css={{
                display: 'flex',
                alignItems: 'center',
                marginRight: '14px',
              }}
            >
              <p
                css={{
                  flexShrink: 0,
                  fontSize: '12px',
                  marginRight: '6px',
                  color: item.totalSolvedCount ? '#111' : '#616161 ',
                }}
              >
                정답률
              </p>
              <p
                css={(theme) => ({
                  fontSize: theme.typography.size.number5,
                  fontWeight: theme.typography.weight.bold,
                  color:
                    item.percentage >= 40
                      ? theme.color.primary.mint600
                      : item.percentage === 0 && item.totalSolvedCount === 0
                      ? '#616161'
                      : theme.color.error.red600,
                })}
              >{`${item.percentage}%`}</p>
            </div>
            <div css={{ flex: 1 }}>
              <UiComponent.ProgressBar
                width={'100%'}
                percent={item.percentage}
                notProgress={item.totalSolvedCount === 0}
              />
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default StatisticsByCategoryItem;
