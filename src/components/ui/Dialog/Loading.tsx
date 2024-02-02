import React, { PropsWithChildren } from 'react';
import Portal from '../Portal/Portal';
import Background from './Background';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from 'static/lottie/loading.json';
import { Interpolation, Theme } from '@emotion/react';

interface Props {
  css?: Interpolation<Theme>;
}

function Loading({ css = {}, children }: PropsWithChildren<Props>) {
  return (
    <Portal>
      <Background css={css}>
        <Player
          autoplay
          loop
          src={animationData}
          style={{
            width: '130px',
            height: '130px',
          }}
        />
        {children}
      </Background>
    </Portal>
  );
}

export default Loading;
