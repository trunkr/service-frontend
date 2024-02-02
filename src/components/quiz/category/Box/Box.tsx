import React, { PropsWithChildren } from 'react';
import { wrap } from './style';

interface Props {
  checked?: boolean;
  handleClick?: () => void;
}

function Box({ children, checked = false, handleClick }: PropsWithChildren<Props>) {
  return (
    <div css={wrap(checked)} onClick={() => handleClick?.()}>
      {children}
    </div>
  );
}

export default Box;
