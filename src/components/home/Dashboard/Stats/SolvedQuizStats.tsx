import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { PATH } from 'data/path';
import { QuizQuery } from 'queries';

interface Props {
  count: number;
  categoryIds: number[];
}

function SolvedQuizStats({ count, categoryIds }: Props) {
  const { data } = QuizQuery.useGetCategory('');

  const categoryName = useMemo(() => {
    if (!data) return '';

    return data
      .filter((d) => categoryIds.includes(d.id))
      .map((d) => d.name)
      .slice(0, 2)
      .join(',');
  }, [categoryIds, data]);

  return (
    <li>
      <div>
        <p>지금까지 푼 CS 문제 수</p>
        <b>{count}</b>
      </div>
      {count > 0 ? (
        <p>
          <span>{categoryName}</span>를 많이 풀었어요.
        </p>
      ) : (
        <NavLink to={PATH.quiz}>문제 풀기</NavLink>
      )}
    </li>
  );
}

export default SolvedQuizStats;
