import getQuizRandom from '@/apis/quiz/getQuizRandom';
import { GetQuizRandomRes } from '@/types/Quiz';
import { useQuery } from 'react-query';

export const useGetQuizRandom = (token: string, categoryIds: string) => {
  return useQuery<GetQuizRandomRes>(['useGetQuizRandom'], () => getQuizRandom(token, categoryIds), {
    staleTime: 300 * 1000,
  });
};
