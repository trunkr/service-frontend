import { base } from 'api';
import { PATH_BASE } from './constants';
import { AnswerParams, AnswerResultType, IResponse } from 'types';

const PATH = `${PATH_BASE}/answer`;

/** 퀴즈 답변 제출 결과 조회 */
const get = (quizGroupId: string) =>
  base.get<IResponse<{ result: AnswerResultType[] }>>(PATH, { params: { quizGroupId } });

/** 퀴즈 답변 상세 조회 */
const getGroup = () => base.get(PATH);

/** 퀴즈 답변 제출 */
const post = (data: AnswerParams) => base.post(PATH, data);

/** 특정 퀴즈에 대한 다른 사람들이 푼 답변 조회 */
const getAnother = () => base.get(`${PATH_BASE}/another-answer`);

export { get, getGroup, post, getAnother };
