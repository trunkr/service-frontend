import { IPageParams } from 'types/request';
import { AnswerResultType } from './answer';
import { QuizCategoryNameType } from './category';

export interface IQuizStatisticsByCategoriesItem {
  /** 카테고리 아이디 */
  categoryId: number;
  /** 퀴즈 카테고리 이름 */
  categoryName: QuizCategoryNameType;
  /** 푼 문제 수 */
  totalSolvedCount: number;
  /** 정답률 */
  percentage: number;
}

export interface IQuizStatistics {
  /** 정답 수 */
  correctCount: number;
  /** 오답 수 */
  incorrectCount: number;
  /** 제출 수 */
  submittedCount: number;
  /** 미제출 수 */
  notSubmittedCount: number;
  /** 전체 */
  totalCount: number;
}

export interface IQuizStatisticsByCategoryParams extends IPageParams {
  quizCategoryId: string;
  /** 오답 필터 */
  seeOnlyIncorrectQuiz?: boolean;
}

export interface IQuizStatisticsByCategoryResponse {
  /** 정답률 */
  percentageOfCorrectAnswers: number;
  statistics: IQuizStatistics;
  content: AnswerResultType[];
}

export interface IQuizStatisticsResponse {
  /** 전체 카테고리 수 */
  totalCategoryCount: number;
  content: IQuizStatisticsByCategoriesItem[];
}
