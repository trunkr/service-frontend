import { QuizStatisticsApi } from 'api';
import { useAuthQuery } from 'queries/query';
import { STATISTICS_KEY } from './keys';
import { IQuizStatisticsByCategoryParams } from 'types';
import { getQueryKeys } from 'queries/query-key';

function useGetStatisticsByCategory(params: IQuizStatisticsByCategoryParams) {
  const result = useAuthQuery(
    getQueryKeys(STATISTICS_KEY).list({ params }),
    () => QuizStatisticsApi.getByCategory(params),
    {
      select: (data) => {
        return data.data;
      },
    },
  );

  return result;
}

export default useGetStatisticsByCategory;
