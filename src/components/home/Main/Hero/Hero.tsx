import React from 'react';
import heroVideo from 'static/video/hero.mp4';
import { title } from './style';

function Hero() {
  return (
    <section css={{ flexDirection: 'column', paddingLeft: '202px' }}>
      <p css={title}>
        내 안의 모든 개발의 가능성.
        <br />
        Trunkr와 함께 성장해보세요.
      </p>
      <video autoPlay loop muted css={{ width: '100%', maxWidth: '907px', marginBottom: '128px' }}>
        <source src={heroVideo} />
      </video>
    </section>
  );
}

export default Hero;
