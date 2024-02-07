import { base } from 'api';
import { PATH_BASE } from './constants';
import {
  IQuizStatisticsByCategoryParams,
  IQuizStatisticsResponse,
  IResponse,
  IQuizStatisticsByCategoryResponse,
  IPagination,
} from 'types';

const PATH = `${PATH_BASE}/answer/statistics-by-categories`;

const get = () => base.get<IResponse<IQuizStatisticsResponse>>(PATH);

const getByCategory = ({ quizCategoryId, seeOnlyIncorrectQuiz, size, page }: IQuizStatisticsByCategoryParams) =>
  base.get<IResponse<IQuizStatisticsByCategoryResponse> & { pagination: IPagination }>(`${PATH}/${quizCategoryId}`, {
    params: {
      size,
      page,
      seeOnlyIncorrectQuiz,
    },
  });

export { get, getByCategory };
