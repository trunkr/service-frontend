import React from 'react';
import Stats from './Stats';
import Recommend from './Recommend/Recommend';
import { wrap, title, titleWrap } from './style';
import { NavLink } from 'react-router-dom';

function Dashboard() {
  return (
    <main css={wrap}>
      <div css={titleWrap}>
        <h1 css={title}>내 학습</h1>
      </div>
      <Stats />
      <div css={titleWrap}>
        <h1 css={title}>추천 학습</h1>
        <NavLink to="/quiz">전체보기</NavLink>
      </div>
      <Recommend />
    </main>
  );
}

export default Dashboard;
