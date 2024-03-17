import React, { useMemo } from 'react';
import { DESC_MAP } from './constants';
import { IQuizCategory } from 'types';
import { QuizQuery } from 'queries';
import { useNavigate } from 'react-router-dom';
import { PATH } from 'data/path';
import IconArrow from 'static/icons/system/IconArrow';
import { wrap, contentsWrap, arrow } from './style';
import { CATEGORY_FORMATTED_MAP, CATEGORY_ICON_MAP } from 'data/category';

function Recommend() {
  const navigate = useNavigate();
  const { data } = QuizQuery.useGetCategory('');

  const categories = useMemo(() => {
    if (!data) return [];
    return data.sort(() => Math.random() - 0.5).slice(0, 3);
  }, [data]);

  const handleClick = (item: IQuizCategory) => {
    navigate(PATH.quiz, { state: { categoryIds: [item.id] } });
  };

  return (
    <ul css={wrap}>
      {categories.map((item: IQuizCategory) => (
        <li key={item.name} onClick={() => handleClick(item)}>
          <div
            css={{
              borderRadius: '10px 10px 0 0',
              width: '100%',
              height: '160px',
              background: `url(${CATEGORY_ICON_MAP[item.name]}) no-repeat center`,
              backgroundSize: 'cover',
            }}
          />
          <div css={contentsWrap}>
            <b>{CATEGORY_FORMATTED_MAP[item.name]}</b>
            <p>{DESC_MAP[item.name]}</p>
            <div>
              <IconArrow css={arrow} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Recommend;
