import React, { PropsWithChildren } from 'react';
import { Interpolation, Theme } from '@emotion/react';
import { background, wrap } from './style';

interface Props {
  css?: Interpolation<Theme>;
}

function Background({ css = {}, children }: PropsWithChildren<Props>) {
  return (
    <div css={wrap}>
      <div css={[background, css]}>{children}</div>
    </div>
  );
}

export default Background;
