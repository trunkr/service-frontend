import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IQuizRandomResponse, IQuizStore, QuizAnswerStatusType } from 'types';

const initialState: IQuizStore = {
  random: null,
};

const {
  reducer,
  actions: { setRandom, setQuizStatus },
} = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setRandom: (state, action: PayloadAction<IQuizRandomResponse | null>) => {
      state.random = action.payload
        ? {
            quizGroupId: action.payload.quizGroupId,
            quizzes: action.payload.quizzes.map((q) => ({ ...q, status: 'NOT_SUBMITTED' })),
            createdAt: new Date().toISOString(),
          }
        : null;
    },
    setQuizStatus: (state, action: PayloadAction<{ index: number; status: QuizAnswerStatusType }>) => {
      const { status, index } = action.payload;
      if (state.random?.quizzes[index]) {
        state.random.quizzes[index].status = status;
      }
    },
  },
});

export { initialState, setRandom, setQuizStatus };
export default reducer;
