import { QuizAnswerApi } from 'api';
import { useAuthQuery } from 'queries/query';
import { ANSWER_KEY } from './keys';
import { getQueryKeys } from 'queries/query-key';

function useGetAnswerResult(quizGroupId: string, enabled?: boolean) {
  const result = useAuthQuery(getQueryKeys(ANSWER_KEY).detail(quizGroupId), () => QuizAnswerApi.get(quizGroupId), {
    select: (data) => {
      return data.data.payload;
    },
    enabled,
  });

  return result;
}

export default useGetAnswerResult;
