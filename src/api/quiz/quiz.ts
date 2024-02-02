import { base } from 'api';
import { PATH_BASE } from './constants';
import { IQuizCategory, IResponse, QuizCategoryType } from 'types';

/** 퀴즈 단건 조회 */
const get = (quizId: number) => base.get(`${PATH_BASE}/${quizId}`);

/** 퀴즈 카테고리 조회 */
const getCategory = (categoryType: QuizCategoryType | '') =>
  base.get<IResponse<IQuizCategory[]>>(`${PATH_BASE}/categories-figure`, { params: { categoryType } });

/** 랜덤 퀴즈 출제 */
const getRandom = () => base.get(`${PATH_BASE}/random`);

/** 최근에 풀었던 퀴즈 조회 */
const getRecent = () => base.get(`${PATH_BASE}/recent-answer`);

export { get, getCategory, getRandom, getRecent };
