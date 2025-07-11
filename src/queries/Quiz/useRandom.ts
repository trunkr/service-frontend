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
            alertContent: '틀린 문제를 복습해보시는 건 어떨까요?',
            alertTitle: '오늘 풀 수 있는 문제를 다 풀었어요.',
          }),
        );
      }
    },
  });
}

export default useRandom;
