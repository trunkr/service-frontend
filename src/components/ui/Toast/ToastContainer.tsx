import React from 'react';
import { container } from './style';
import Toast from './Toast';
import { useAppSelector } from 'stores';

function ToastContainer() {
  const {
    toasts: { posBottom, list },
  } = useAppSelector((state) => state.ui);

  return (
    <div css={container(posBottom)}>
      {list.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );
}

export default ToastContainer;
