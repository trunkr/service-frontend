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

export interface IsCorrect {
  isCorrect: boolean;
}

export interface IIsCorrectQuizGroup extends Pick<IQuiz, 'question'> {
  quizId: number;
  isCorrect: boolean;
}

export interface IQuizGroup {
  quizGroupId: number;
  result: IIsCorrectQuizGroup[];
}
