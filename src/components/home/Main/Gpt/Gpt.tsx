import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from 'static/lottie/main2.json';
import { title, subTitle } from '../style';

function Gpt() {
  return (
    <section css={{ flexDirection: 'row', justifyContent: 'space-between', padding: '0 181px 0 202px' }}>
      <div>
        <p css={title}>
          ChatGPT에게는 정확하게,
          <br />
          사람들에게는 풍부하게
          <br />
          피드백을 받아보세요.
        </p>
        <p css={subTitle}>
          CS 문제를 풀고, ChatGPT에게
          <br />
          피드백을 받을 수 있어요. 다른 사용자가
          <br />푼 문제도 함께 보고 공부할 수 있어요.
        </p>
      </div>

      <Player
        autoplay
        loop
        src={animationData}
        style={{
          width: '525px',
          height: '436px',
          margin: '165px 0 150px 0',
        }}
      />
    </section>
  );
}

export default Gpt;
