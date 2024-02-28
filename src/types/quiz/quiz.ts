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

export type NotSubmittedQuizItemType = IQuiz & Pick<IQuizGroup, 'quizGroupId'>;

export type QuizItemType = (IQuiz | NotSubmittedQuizItemType) & { status: QuizAnswerStatusType };

export interface IQuizRandom {
  quizGroupId: string;
  quizzes: QuizItemType[];
}

export interface IQuizStore {
  random: IQuizRandom | null;
  notOpenDate: string | null;
}

export interface IsCorrect {
  isCorrect: boolean;
}

export interface IIsCorrectQuizGroup extends Pick<IQuiz, 'question'> {
  quizId: number;
  isCorrect: boolean;
}

export interface IQuizGroup {
  quizGroupId: string;
  result: IIsCorrectQuizGroup[];
}
