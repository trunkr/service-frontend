import { base } from 'api';
import { IAnswerDetailParams, IQuizAnswer, IResponse } from 'types';
import { PATH_BASE } from './constants';

const PATH = `${PATH_BASE}/answer`;

/** 퀴즈 답변 제출 결과 조회 */
const get = () => base.get(PATH);

/** 퀴즈 답변 상세 조회 */
const getGroup = () => base.get(PATH);

/** 퀴즈 답변 제출 */
const post = () => base.post(PATH);

/** 특정 퀴즈에 대한 다른 사람들이 푼 답변 조회 */
const getAnother = (quizId: string) =>
  base.get(`${PATH_BASE}/another-answer`, {
    params: { quizId },
  });

/** 퀴즈 답변 상세 조회 */
const getDetail = ({ quizId, quizGroupId }: IAnswerDetailParams) =>
  base.get<IResponse<IQuizAnswer>>(`${PATH_BASE}/${quizId}/groups/${quizGroupId}/answer`);

export { get, getGroup, post, getAnother, getDetail };
