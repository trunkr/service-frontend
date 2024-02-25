import React from 'react';
import { isMobile } from 'react-device-detect';

import heroVideo from 'static/video/hero.mp4';
import { wrap, mWrap, title, mTitle, videoStyle, mVideoStyle } from './style';

function Hero() {
  return (
    <section css={isMobile ? mWrap : wrap}>
      <p css={isMobile ? mTitle : title}>
        내 안의 모든 개발의 가능성.
        <br />
        Trunkr와 함께 성장해보세요.
      </p>
      <video autoPlay loop muted css={isMobile ? mVideoStyle : videoStyle}>
        <source src={heroVideo} />
      </video>
    </section>
  );
}

export default Hero;
