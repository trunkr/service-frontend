import React from 'react';
import { isMobile } from 'react-device-detect';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from 'static/lottie/main2.json';
import { wrap, mWrap, playerStyle, mPlayerStyle } from './style';
import { title, subTitle, mTitle, mSubTitle } from '../style';

function Gpt() {
  return (
    <section css={isMobile ? mWrap : wrap}>
      <div>
        <p css={isMobile ? mTitle : title}>
          ChatGPT에게는 정확하게,
          <br />
          사람들에게는 풍부하게
          <br />
          피드백을 받아보세요.
        </p>
        <p css={isMobile ? mSubTitle : subTitle}>
          CS 문제를 풀고, ChatGPT에게
          <br />
          피드백을 받을 수 있어요. 다른 사용자가
          <br />푼 문제도 함께 보고 공부할 수 있어요.
        </p>
      </div>

      <Player autoplay loop src={animationData} style={isMobile ? mPlayerStyle : playerStyle} />
    </section>
  );
}

export default Gpt;
