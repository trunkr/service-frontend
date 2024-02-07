import React from 'react';
import { NavLink } from 'react-router-dom';
import { PATH } from 'data/path';

interface Props {
  count: number;
}

function IncorrectQuizStats({ count }: Props) {
  return (
    <li>
      <div>
        <p>틀린 CS 문제 수</p>
        <b>{count}</b>
      </div>
      {count > 0 ? <NavLink to={PATH.statistics}>CS 문제 풀이 분석 보기</NavLink> : <p>아직 없어요</p>}
    </li>
  );
}

export default IncorrectQuizStats;
