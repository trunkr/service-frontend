import { GetQuizAnswerRes } from '@/types/Quiz';
import customedAxios from '../customedAxios';

export const getQuizAnswer = async (quizGroupId: string, token: string): Promise<GetQuizAnswerRes> => {
  try {
    const res = await customedAxios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/quiz/answer?quizGroupId=${quizGroupId}`, {
      headers: {
        Authorization: 'Bearer ' + token.trim(),
      },
    });
    return res.data;
  } catch (exeption) {
    throw exeption;
  }
};
export default getQuizAnswer;
