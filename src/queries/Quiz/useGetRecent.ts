import { QuizApi } from 'api';
import { useAuthQuery } from 'queries/query';
import { ANSWER_RECENT_KEY } from './keys';

function useGetRecent() {
  const result = useAuthQuery(ANSWER_RECENT_KEY, () => QuizApi.getRecent(), {
    select: (data) => {
      return data.data.payload;
    },
  });

  return result;
}

export default useGetRecent;
