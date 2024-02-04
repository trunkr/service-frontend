import React, { PropsWithChildren } from 'react';
import { toastContainerStyle } from './style';

function ToastContainer({ children }: PropsWithChildren) {
  return <div css={toastContainerStyle}>{children}</div>;
}

export default ToastContainer;
