import { MemberApi } from 'api';
import { useAuthQuery } from 'queries/query';
import { STATS_KEY } from './keys';

function useStats() {
  const result = useAuthQuery(STATS_KEY, () => MemberApi.getStats(), {
    select: (data) => {
      return data.data.payload;
    },
  });

  return result;
}

export default useStats;
