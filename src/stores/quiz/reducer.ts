import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IQuizRandomResponse, IQuizStore, QuizAnswerStatusType, NotSubmittedQuizItemType } from 'types';

const initialState: IQuizStore = {
  random: null,
  notOpenDate: null,
};

const {
  reducer,
  actions: { setRandom, setQuizStatus, setRandomFromNotSubmitted, setNotOpenDate },
} = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setRandom: (state, action: PayloadAction<IQuizRandomResponse | null>) => {
      state.random = action.payload
        ? {
            quizGroupId: action.payload.quizGroupId,
            quizzes: action.payload.quizzes.map((q) => ({ ...q, status: 'NOT_SUBMITTED' })),
          }
        : null;
    },
    setRandomFromNotSubmitted: (state, action: PayloadAction<{ quizzes: NotSubmittedQuizItemType[] }>) => {
      state.random = {
        quizGroupId: action.payload.quizzes[0]?.quizGroupId || '',
        quizzes: action.payload.quizzes.map((q) => ({ ...q, status: 'NOT_SUBMITTED' })),
      };
    },
    setQuizStatus: (state, action: PayloadAction<{ index: number; status: QuizAnswerStatusType }>) => {
      const { status, index } = action.payload;
      if (state.random?.quizzes[index]) {
        state.random.quizzes[index].status = status;
      }
    },
    setNotOpenDate: (state) => {
      const today = new Date();
      state.notOpenDate = `${today.getFullYear}${today.getMonth()}${today.getDate()}`;
    },
  },
});

export { initialState, setRandom, setQuizStatus, setRandomFromNotSubmitted, setNotOpenDate };
export default reducer;
