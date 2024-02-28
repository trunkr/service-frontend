import { QuizApi } from 'api';
import { useAuthMutation } from 'queries/query';

function useGetNotSubmitted() {
  return useAuthMutation(QuizApi.getNotSubmitted, {
    onError() {
      return;
    },
  });
}

export default useGetNotSubmitted;
