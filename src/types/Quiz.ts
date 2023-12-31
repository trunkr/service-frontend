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

export type GetQuizCategoriesFigureRes = ResponseDto<GetQuizCategoriesFigureInterface[]>;
export type GetQuizRandomRes = ResponseDto<GetQuizRandomInterface[]>;
