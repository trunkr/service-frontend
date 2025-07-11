import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postFavor } from 'api/quiz/favor';
import { getQueryKeys } from 'queries/query-key';
import { useDispatch } from 'react-redux';
import { addToast } from 'stores/ui';
import { AnswerFavorParams, IQuizAnotherAnswerParams } from 'types';
import { ANOTHER_ANSWER_KEY } from './keys';

const useFavorMutate = ({ quizId, sort }: IQuizAnotherAnswerParams) => {
  const queryClient = useQueryClient();
  const answerQueryKey = getQueryKeys(ANOTHER_ANSWER_KEY).detail(`${quizId}_${sort}`);

  const dispatch = useDispatch();
  const addErrToast = () => dispatch(addToast({ message: '잠시 후에 다시 시도해주세요.' }));

  return useMutation({
    mutationFn: ({ isFavor, articleId, articleType = 'QUIZ' }: AnswerFavorParams) =>
      postFavor({ articleId, articleType, isFavor }),
    onMutate: ({ isFavor, articleId }) => {
      const oldData = queryClient.getQueryData(answerQueryKey);
      if (oldData) {
        queryClient.cancelQueries(answerQueryKey);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        queryClient.setQueryData(answerQueryKey, (oldData: any) => {
          if (oldData) {
            const payload = oldData.data.payload;
            const clonedPayload = [...payload];
            const focusedArticleIndex = clonedPayload.findIndex((item) => item.memberQuizAnswerId === articleId);
            clonedPayload[focusedArticleIndex].isFavor = isFavor;
            isFavor
              ? (clonedPayload[focusedArticleIndex].favorCount += 1)
              : (clonedPayload[focusedArticleIndex].favorCount -= 1);
            return { ...oldData, data: { ...oldData.data, payload: clonedPayload } };
          }
          return oldData;
        });
        return () => queryClient.setQueryData(answerQueryKey, oldData);
      }
    },
    onError: (err, values, rollback) => {
      if (rollback) {
        rollback();
      }
      addErrToast();
    },
  });
};

export default useFavorMutate;
