export type ToastContextType = {
  toastCompo: ToastPayload[];
  addToast: (toast: Omit<ToastPayload, 'id'>) => void;
  removeToast: (toastId: string) => void;
};

export type ToastPayload = {
  id: string;
  message: string;
};
