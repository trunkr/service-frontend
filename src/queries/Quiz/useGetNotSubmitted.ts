import { QuizApi } from 'api';
import { useAuthMutation } from 'queries/query';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'stores';
import { PATH } from 'data/path';
import { setRandom } from 'stores/quiz';

function useGetNotSubmitted() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return useAuthMutation(QuizApi.getNotSubmitted, {
    onSuccess(data) {
      dispatch(setRandom(data.data.payload));
      navigate(PATH.quizAnswer);
    },
    onError() {
      return;
    },
  });
}

export default useGetNotSubmitted;
