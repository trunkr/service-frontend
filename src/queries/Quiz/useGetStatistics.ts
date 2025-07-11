import { QuizStatisticsApi } from 'api';
import { useAuthQuery } from 'queries/query';
import { STATISTICS_KEY } from './keys';

function useGetStatistics() {
  const result = useAuthQuery(STATISTICS_KEY, () => QuizStatisticsApi.get(), {
    select: (data) => {
      return data.data.payload;
    },
  });

  return result;
}

export default useGetStatistics;
