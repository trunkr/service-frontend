import { GetQuizRandomRes } from '@/types/Quiz';
import customedAxios from '../customedAxios';

export const getQuizRandom = async (token: string): Promise<GetQuizRandomRes> => {
  try {
    const res = await customedAxios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/quiz/random`, {
      headers: {
        Authorization: 'Bearer ' + token.trim(),
      },
    });
    return res.data;
  } catch (exeption) {
    throw exeption;
  }
};
export default getQuizRandom;
