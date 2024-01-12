import { ResponseDto } from './Common';

export interface GetQuizCategoriesFigureInterface {
  id: number;
  name: string;
  type: string;
  quizTotal: number;
  solvableQuizCnt: number;
}
export interface GetQuizRandomInterface {
  id: number;
  question: string;
  category: QuizCategoryInterface;
}
export interface QuizCategoryInterface {
  id: number;
  name: string;
  type: string;
}

export interface GetQuizRandomInterface {
  quizGroupId: string;
  quizzes: RandomQuizInterface[];
}

export interface RandomQuizInterface {
  id: 3;
  question: string;
  category: QuizCategoryInterface;
}
export interface PostQuizAnswerInterface {
  quizGroupId: string;
  quizId: number;
  answer: string;
}
export interface QuizResultInterface {
  quizId: number;
  question: string;
  isCorrect: boolean;
}
export interface GetQuizAnswerInterface {
  quizGroupId: string;
  result: QuizResultInterface[];
}
export type GetQuizCategoriesFigureRes = ResponseDto<GetQuizCategoriesFigureInterface[]>;
export type GetQuizRandomRes = ResponseDto<GetQuizRandomInterface>;
export type PostQuizAnswerReq = PostQuizAnswerInterface;
export type GetQuizAnswerRes = ResponseDto<GetQuizAnswerInterface>;
