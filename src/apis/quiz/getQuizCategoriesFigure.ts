import { GetQuizCategoriesFigureRes } from '@/types/Quiz';
import customedAxios from '../customedAxios';

export const getQuizCategoriesFigure = async (token: string): Promise<GetQuizCategoriesFigureRes> => {
  try {
    const res = await customedAxios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/quiz/categories-figure`, {
      headers: {
        Authorization: 'Bearer ' + token.trim(),
      },
    });
    return res.data;
  } catch (exeption) {
    throw exeption;
  }
};
export default getQuizCategoriesFigure;
