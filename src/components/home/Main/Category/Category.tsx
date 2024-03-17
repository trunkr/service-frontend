import React from 'react';

import { Player } from '@lottiefiles/react-lottie-player';
import animationData from 'static/lottie/main3.json';
import animationDataM from 'static/lottie/mMain3.json';
import { title, subTitle, mTitle, mSubTitle } from '../style';
import { isMobileDevice } from 'utils/device';

function Category() {
  return (
    <section css={{ flexDirection: 'column', paddingBottom: '40px' }}>
      <div css={isMobileDevice ? {} : { marginLeft: '202px' }}>
        <p css={isMobileDevice ? mTitle : title}>
          부족한 부분을 분석해
          <br />
          성장할 수 있어요.
        </p>
        <p css={isMobileDevice ? mSubTitle : subTitle}>
          어떤 부분을 어려워하는지
          <br />
          CS 카테고리별로 진단해드립니다.
        </p>
      </div>
      <Player autoplay loop src={isMobileDevice ? animationDataM : animationData} style={{ margin: '20px 0 50px' }} />
    </section>
  );
}

export default Category;
