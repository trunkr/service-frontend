export type QuizCategoryType = 'CS' | 'FRAMEWORK' | 'LANGUAGE';
export type QuizCategoryNameType =
  | 'OS'
  | 'DATA_STRUCTURE'
  | 'DATABASE'
  | 'COMPUTER_ARCHITECTURE'
  | 'NETWORK'
  | 'SPRING'
  | 'REACT'
  | 'JAVA'
  | 'JAVASCRIPT'
  | 'KOTLIN';

export interface IQuizCategoryBase {
  /** 퀴즈 카테고리 아이디  */
  id: number;
  /** 퀴즈 카테고리 이름 */
  name: QuizCategoryNameType;
  /** 퀴즈 카테고리 타입 */
  type: QuizCategoryType;
}

export interface IQuizCategory extends IQuizCategoryBase {
  /** 전체 퀴즈 수 */
  quizTotal: number;
  /** 풀 수 있는 퀴즈 수 */
  solvableQuizCnt: number;
}
