import React from 'react';
import Stats from './Stats';
import Recommend from './Recommend/Recommend';
import { wrap, title } from './style';

function Dashboard() {
  return (
    <main css={wrap}>
      <h1 css={title}>내 학습</h1>
      <Stats />
      <h1 css={title}>추천 학습</h1>
      <Recommend />
    </main>
  );
}

export default Dashboard;
