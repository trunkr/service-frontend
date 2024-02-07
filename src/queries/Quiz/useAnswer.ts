import { QuizAnswerApi } from 'api';
import { useMutation } from '@tanstack/react-query';

function useRandom() {
  return useMutation(QuizAnswerApi.post);
}

export default useRandom;
