import { QuizApi } from 'api';
import { useMutation } from '@tanstack/react-query';
import { useAppDispatch } from 'stores';
import { useNavigate } from 'react-router-dom';
import { setRandom } from 'stores/quiz';
import { PATH } from 'data/path';
import { AxiosError } from 'axios';
import { openAlert } from 'stores/ui';

function useRandom() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return useMutation(QuizApi.getRandom, {
    onSuccess(data) {
      dispatch(setRandom(data.data.payload));
      navigate(PATH.quizAnswer);
    },
    onError(err) {
      if (err instanceof AxiosError) {
        dispatch(
          openAlert({
            alertContent:
              '하루에 1번만 풀 수 있어요! CS 문제 풀기는 내일 다시 시도해 주세요.\n오늘 푼 문제에 대해 복습해보시는 건 어떨까요?',
            alertTitle: '더 이상 풀 수 있는 문제가 없어요.',
          }),
        );
      }
    },
  });
}

export default useRandom;
