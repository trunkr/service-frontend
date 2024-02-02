import React from 'react';
import { NavLink } from 'react-router-dom';
import { wrap } from './style';
import { MemberQuery } from 'queries';

function Stats() {
  const { data } = MemberQuery.useStats();
  return (
    <ul css={wrap}>
      <li>
        <div>
          <p>지금까지 푼 CS 문제 수</p>
          <b>{data?.solvedQuizCount || 0}</b>
        </div>
        <p>
          <span>자료구조, Java</span>를 많이 풀었어요.
        </p>
      </li>
      <li>
        <div>
          <p>틀린 CS 문제 수</p>
          <b>{data?.incorrectQuizCount || 0}</b>
        </div>
        <NavLink to="/">CS 문제 풀이 분석 보기</NavLink>
      </li>
      <li>
        <div>
          <p>추천 받은 답변 수</p>
          <b>{data?.recommendedAnswerCount || 0}</b>
        </div>
        <p>{data?.recommendedAnswerCount || 0}명이 추천했어요!</p>
      </li>
      {/* <li>
        <div>
          <p>알고리즘 오답노트 수</p>
          <b>2</b>
        </div>
        <p>열심이시네요👏</p>
      </li> */}
    </ul>
  );
}

export default Stats;
