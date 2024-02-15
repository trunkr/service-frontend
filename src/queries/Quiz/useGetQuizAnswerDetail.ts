import { QuizAnswerApi } from 'api';
import { useAuthQuery } from 'queries/query';
import { getQueryKeys } from 'queries/query-key';
import { IAnswerDetailParams } from 'types';
import { ANSWER_DETAIL_KEY } from './keys';

function useGetQuizAnswerDetailResult({ quizId, quizGroupId }: IAnswerDetailParams, enabled?: boolean) {
  const result = useAuthQuery(
    getQueryKeys(ANSWER_DETAIL_KEY).detail(quizId),
    () => QuizAnswerApi.getDetail({ quizId, quizGroupId }),
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

export default useGetQuizAnswerDetailResult;
