import { IPageParams } from 'types/request';
import { IQuizCategoryBase } from './category';
import { IMember } from 'types/member';

export type QuizAnswerStatusType = 'CORRECT' | 'INCORRECT' | 'SUBMITTED' | 'NOT_SUBMITTED';

export interface IQuizAnswer {
  quizId: number;
  quizGroupId: string;
  quizAnswerStatus: QuizAnswerStatusType;
  question: string;
  answer: string;
  /** AI 피드백 */
  feedback: string;
  category: IQuizCategoryBase;
  member: Pick<IMember, 'nickname' | 'profileImageUrl'> & { id: number };
}

export interface IQuizAnotherAnswer extends Pick<IQuizAnswer, 'quizId' | 'quizGroupId' | 'answer' | 'member'> {
  favorCount: number;
  isFavor: boolean;
}

export type RecentAnswerType = Pick<IQuizAnswer, 'quizId' | 'quizGroupId' | 'question' | 'quizAnswerStatus'>;

export type AnswerGroupParams = Pick<IQuizAnswer, 'quizId' | 'quizGroupId'>;

export type AnotherAnswerParams = Pick<IQuizAnotherAnswer, 'quizId'> & IPageParams;

export type AnswerParams = AnswerGroupParams & Pick<IQuizAnswer, 'answer'> & { isQuizOpen: boolean };

export type AnswerResultType = Pick<IQuizAnswer, 'quizId' | 'question'> & { isCorrect: boolean };
