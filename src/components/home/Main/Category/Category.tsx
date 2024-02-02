import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from 'static/lottie/main3.json';
import { title, subTitle } from '../style';

function Category() {
  return (
    <section css={{ flexDirection: 'column', paddingBottom: '40px' }}>
      <div css={{ marginLeft: '202px' }}>
        <p css={title}>
          부족한 부분을 분석해
          <br />
          성장할 수 있어요.
        </p>
        <p css={subTitle}>
          어떤 부분을 어려워하는지
          <br />
          CS 카테고리별로 진단해드립니다.
        </p>
      </div>
      <Player autoplay loop src={animationData} style={{}} />
    </section>
  );
}

export default Category;
