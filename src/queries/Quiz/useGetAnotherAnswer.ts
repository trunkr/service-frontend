import { QuizAnswerApi } from 'api';
import { useAuthQuery } from 'queries/query';
import { getQueryKeys } from 'queries/query-key';
import { IQuizAnotherAnswerParams } from 'types';
import { ANOTHER_ANSWER_KEY } from './keys';

function useGetAnotherAnswerResult({ quizId, sort = 'favor,desc' }: IQuizAnotherAnswerParams, enabled?: boolean) {
  const result = useAuthQuery(
    getQueryKeys(ANOTHER_ANSWER_KEY).detail(`${quizId}_${sort}`),
    () => QuizAnswerApi.getAnother({ quizId, sort }),
    {
      select: (data) => {
        return data.data.payload;
      },
      enabled,
    },
  );

  return result;
}

export default useGetAnotherAnswerResult;
