import { base } from 'api';
import { PATH_BASE } from './constants';
import { IQuizCategory, IQuizRandomParams, IQuizRandomResponse, IResponse, QuizCategoryFilterType } from 'types';

/** 퀴즈 단건 조회 */
const get = (quizId: number) => base.get(`${PATH_BASE}/${quizId}`);

/** 퀴즈 카테고리 조회 */
const getCategory = (categoryType: QuizCategoryFilterType) =>
  base.get<IResponse<IQuizCategory[]>>(`${PATH_BASE}/categories-figure`, { params: { categoryType } });

/** 랜덤 퀴즈 출제 */
const getRandom = ({ categoryIds, quizCount }: IQuizRandomParams) =>
  base.get<IResponse<IQuizRandomResponse>>(`${PATH_BASE}/random`, { params: { categoryIds, quizCount } });

/** 최근에 풀었던 퀴즈 조회 */
const getRecent = () => base.get(`${PATH_BASE}/recent-answer`);

export { get, getCategory, getRandom, getRecent };
