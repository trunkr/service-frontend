import { QuizAnswerApi } from 'api';
import { useAuthQuery } from 'queries/query';
import { ANOTHER_ANSWER_KEY } from './keys';
import { getQueryKeys } from 'queries/query-key';

function useGetAnotherAnswerResult(quizId: string, enabled?: boolean) {
  const result = useAuthQuery(getQueryKeys(ANOTHER_ANSWER_KEY).detail(quizId), () => QuizAnswerApi.getAnother(quizId), {
    select: (data) => {
      return data.data.payload;
    },
    enabled,
    suspense: true,
  });

  return result;
}

export default useGetAnotherAnswerResult;
