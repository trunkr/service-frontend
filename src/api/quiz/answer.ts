import { base } from 'api';
import {
  IAnswerDetailParams,
  IQuizAnotherAnswer,
  IQuizAnswer,
  IQuizGroup,
  AnswerParams,
  AnswerResultType,
  IResponse,
  IQuizAnotherAnswerParams,
} from 'types';
import { PATH_BASE } from './constants';

const PATH = `${PATH_BASE}/answer`;

/** 퀴즈 답변 제출 결과 조회 */
const get = (quizGroupId: string) =>
  base.get<IResponse<{ result: AnswerResultType[] }>>(PATH, { params: { quizGroupId } });

/** 퀴즈 답변 제출 */
const post = (data: AnswerParams) => base.post(PATH, data);

/** 특정 퀴즈에 대한 다른 사람들이 푼 답변 조회 */
const getAnother = ({ quizId, sort }: IQuizAnotherAnswerParams) =>
  base.get<IResponse<IQuizAnotherAnswer[]>>(`${PATH_BASE}/another-answer`, {
    params: { quizId, sort },
  });

/** 퀴즈 답변 상세 조회 */
const getDetail = ({ quizId, quizGroupId }: IAnswerDetailParams) =>
  base.get<IResponse<IQuizAnswer>>(`${PATH_BASE}/${quizId}/groups/${quizGroupId}/answer`);

/** 퀴즈 그룹 아이디로 퀴즈 답변 제출 결과 조회*/
const getGroup = (quizGroupId: string) =>
  base.get<IResponse<IQuizGroup>>(`${PATH_BASE}/answer`, { params: { quizGroupId } });

export { get, getGroup, post, getAnother, getDetail };
