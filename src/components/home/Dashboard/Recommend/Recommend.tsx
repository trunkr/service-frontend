import React, { useMemo } from 'react';
import { ICON_MAP, DESC_MAP } from './constants';
import { wrap, contentsWrap } from './style';
import { IQuizCategory } from 'types';
import { QuizQuery } from 'queries';

function Recommend() {
  const { data } = QuizQuery.useGetCategory('');

  const categories = useMemo(() => {
    if (!data) return [];
    return data.sort(() => Math.random() - 0.5).slice(0, 3);
  }, [data]);

  return (
    <ul css={wrap}>
      {categories.map((item: IQuizCategory) => (
        <li key={item.name}>
          <div
            css={{
              borderRadius: '10px 10px 0 0',
              width: '100%',
              height: '160px',
              background: `url(${ICON_MAP[item.name]}) no-repeat center`,
              backgroundSize: 'cover',
            }}
          />
          <div css={contentsWrap}>
            <b>{item.name}</b>
            <p>{DESC_MAP[item.name]}</p>
            <button type="button"></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Recommend;
