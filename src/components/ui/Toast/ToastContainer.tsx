import React from 'react';
import { container } from './style';
import Toast from './Toast';
import { useAppSelector } from 'stores';

function ToastContainer() {
  const { toasts } = useAppSelector((state) => state.ui);

  return (
    <div css={container}>
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );
}

export default ToastContainer;
