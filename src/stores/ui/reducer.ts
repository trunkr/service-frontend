import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as _v4 } from 'uuid';
import { IToastPayload, IUiStore } from 'types';

const initialState: IUiStore = {
  loading: false,
  isOpenAlert: false,
  alertTitle: '',
  alertContent: '',
  toasts: {
    list: [],
    posBottom: 60,
  },
};

const {
  reducer,
  actions: { loaded, loading, openAlert, closeAlert, clearAll, addToast, removeToast },
} = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    loading: (state) => {
      state.loading = true;
    },
    loaded: (state) => {
      state.loading = false;
    },
    openAlert: (state, action: PayloadAction<Pick<IUiStore, 'alertContent' | 'alertTitle'>>) => {
      state.isOpenAlert = true;
      state.alertContent = action.payload.alertContent;
      state.alertTitle = action.payload.alertTitle;
    },
    closeAlert: (state) => {
      state.isOpenAlert = false;
    },
    clearAll: (state) => {
      state.loading = false;
      state.isOpenAlert = false;
      state.alertContent = '';
    },
    addToast: (state, action: PayloadAction<Omit<IToastPayload, 'id'>>) => {
      const id = _v4();

      state.toasts = {
        posBottom: action.payload?.posBottom || 60,
        list: [{ id, ...action.payload }, ...state.toasts.list],
      };
    },
    removeToast: (state, action: PayloadAction<Pick<IToastPayload, 'id'>>) => {
      const { id } = action.payload;

      state.toasts = { ...state.toasts, list: state.toasts.list.filter((toast) => toast.id !== id) };
    },
  },
});

export { initialState, loaded, loading, openAlert, closeAlert, clearAll, addToast, removeToast };
export default reducer;
