import { QuizAnswerStatusType } from './answer';
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

export interface IQuizRandomResponse {
  quizGroupId: string;
  quizzes: IQuiz[];
}

export interface IQuizRandom {
  quizGroupId: string;
  createdAt: string;
  quizzes: (IQuiz & { status: QuizAnswerStatusType })[];
}

export interface IQuizStore {
  random: IQuizRandom | null;
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
