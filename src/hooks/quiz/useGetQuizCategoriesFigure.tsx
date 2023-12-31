import getQuizCategoriesFigure from '@/apis/quiz/getQuizCategoriesFigure';
import { GetQuizCategoriesFigureRes } from '@/types/Quiz';
import { useQuery } from 'react-query';

export const useGetQuizCategoriesFigure = (token: string) => {
  return useQuery<GetQuizCategoriesFigureRes>(['useGetQuizCategoriesFigure'], () => getQuizCategoriesFigure(token), {
    staleTime: 300 * 1000,
  });
};
