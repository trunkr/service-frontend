import React from 'react';

import heroVideo from 'static/video/hero.mp4';
import { isMobileDevice } from 'utils/device';
import { wrap, mWrap, title, mTitle, videoStyle, mVideoStyle } from './style';

function Hero() {
  return (
    <section css={isMobileDevice ? mWrap : wrap}>
      <p css={isMobileDevice ? mTitle : title}>
        내 안의 모든 개발의 가능성.
        <br />
        Trunkr와 함께 성장해보세요.
      </p>
      <video autoPlay loop muted css={isMobileDevice ? mVideoStyle : videoStyle}>
        <source src={heroVideo} />
      </video>
    </section>
  );
}

export default Hero;
