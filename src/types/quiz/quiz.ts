import { IQuizCategoryBase } from './category';

export interface IQuiz {
  id: number;
  question: string;
  category: IQuizCategoryBase;
}

export interface IQuizRandomParams {
  categoryIds: string;
  quizCount: number;
}
