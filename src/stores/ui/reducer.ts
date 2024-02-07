import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUiStore } from 'types';

const initialState: IUiStore = {
  loading: false,
  isOpenAlert: false,
  alertTitle: '',
  alertContent: '',
};

const {
  reducer,
  actions: { loaded, loading, openAlert, closeAlert, clearAll },
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
  },
});

export { initialState, loaded, loading, openAlert, closeAlert, clearAll };
export default reducer;
