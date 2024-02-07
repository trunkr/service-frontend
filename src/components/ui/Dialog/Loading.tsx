import React, { PropsWithChildren } from 'react';
import Portal from '../Portal/Portal';
import Background from './Background';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from 'static/lottie/loading.json';
import { Interpolation, Theme } from '@emotion/react';
import useDisableScroll from './useDisableScroll';

interface Props {
  css?: Interpolation<Theme>;
  opacity?: number;
  isWhite?: boolean;
}

function Loading({ css = {}, opacity = 0.5, isWhite = false, children }: PropsWithChildren<Props>) {
  useDisableScroll();

  return (
    <Portal>
      <Background css={css} opacity={opacity} isWhite={isWhite}>
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
