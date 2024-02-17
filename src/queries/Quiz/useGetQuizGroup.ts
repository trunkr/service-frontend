import { QuizAnswerApi } from 'api';
import { useAuthQuery } from 'queries/query';
import { QUIZ_GROUP_KEY } from './keys';
import { getQueryKeys } from 'queries/query-key';

function useGetQuizGroup(quizGroupId: string, enabled?: boolean) {
  const result = useAuthQuery(
    getQueryKeys(QUIZ_GROUP_KEY).detail(quizGroupId),
    () => QuizAnswerApi.getGroup(quizGroupId),
    {
      select: (data) => {
        return data.data.payload;
      },
      enabled,
      suspense: true,
    },
  );

  return result;
}

export default useGetQuizGroup;
