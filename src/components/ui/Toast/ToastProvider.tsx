import React, { useMemo, useState, type PropsWithChildren } from 'react';
import { v4 as _v4 } from 'uuid';

import ToastContext from './ToastContext';
import ToastContainer from './ToastContainer';
import Toast from './Toast';
import { type ToastPayload } from './types';

function ToastProvider({ children }: PropsWithChildren) {
  const [toastCompo, setToastCompo] = useState<ToastPayload[]>([]);

  const addToast = (toastProps: Omit<ToastPayload, 'id'>) => {
    const id = _v4();

    setToastCompo((prev) => [{ id, ...toastProps }, ...prev]);
  };

  const removeToast = (id: string) => setToastCompo((prev) => prev.filter((toast) => toast.id !== id));

  const value = useMemo(() => ({ toastCompo, addToast, removeToast }), [toastCompo, addToast, removeToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer>
        {toastCompo.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </ToastContainer>
    </ToastContext.Provider>
  );
}

export default ToastProvider;
