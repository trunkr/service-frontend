import React from 'react';

import { IQuizStatisticsByCategoriesItem } from 'types';
import Box from 'components/quiz/category/Box';
import { ICON_DATA } from 'data/quiz';
import { wrap, title, subTitle } from './style';
import { UiComponent } from 'components';
import { useNavigate } from 'react-router-dom';
import { PATH } from 'data/path';
import { CATEGORY_FORMATTED_MAP } from 'data/category';

interface Props {
  item: IQuizStatisticsByCategoriesItem;
}

function StatisticsByCategoryItem({ item }: Props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${PATH.statistics}/${item.categoryId}`);
  };

  return (
    <Box handleClick={handleClick}>
      <div css={wrap}>
        <img src={ICON_DATA[item.categoryName]} alt="" width={40} />
        <div css={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <p css={title}>{CATEGORY_FORMATTED_MAP[item.categoryName]}</p>
          <p css={subTitle}>{`푼 문제 총 ${item.totalSolvedCount}개`}</p>
          <div css={{ display: 'flex', width: '100%', alignItems: 'center' }}>
            <div
              css={{
                minWidth: '75px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginRight: '12px',
              }}
            >
              <p
                css={{
                  fontSize: '12px',
                  marginRight: '6px',
                }}
              >
                정답률
              </p>
              <p
                css={(theme) => ({
                  fontSize: theme.typography.size.number5,
                  fontWeight: theme.typography.weight.bold,
                  color:
                    item.percentage > 70
                      ? theme.color.primary.mint600
                      : item.percentage === 0
                      ? theme.color.gray.gray250
                      : theme.color.error.red600,
                })}
              >{`${item.percentage}%`}</p>
            </div>
            <UiComponent.ProgressBar width={'100%'} percent={item.percentage} />
          </div>
        </div>
      </div>
    </Box>
  );
}

export default StatisticsByCategoryItem;
