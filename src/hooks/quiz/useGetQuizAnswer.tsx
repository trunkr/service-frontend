import getQuizAnswer from '@/apis/quiz/getQuizAnswer';
import { GetQuizAnswerRes } from '@/types/Quiz';
import { useQuery } from 'react-query';

export const useGetQuizAnswer = (token: string, quizGroupId: string) => {
  return useQuery<GetQuizAnswerRes>(['useGetQuizAnswer'], () => getQuizAnswer(quizGroupId, token), {
    staleTime: 300 * 1000,
  });
};
